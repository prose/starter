
import yaml
import os
import git

YAML_FILE = "compressed.md"
FOLDERS = ["/media/"]

#Link git with python
repo = git.Repo()
#Get the staged files
diffs = repo.index.diff('HEAD')
staged_files = [x.a_blob.path for x in diffs if hasattr(x, 'a_blob') and x.a_blob != None ]

#Directory of this file
dir = os.path.dirname(os.path.abspath(__file__))

#For each gallery directory, find all files and build the yaml.
for folder in FOLDERS:

    #generate the path to the yaml file Jekyll will use
    folderpath = os.path.join(dir, folder)
    yamlfile = os.path.join(folderpath, YAML_FILE)

    #Generate a list of images the yaml file knows about
    #These images won't need compressing as they already are.
    knownimages = []
    if os.path.exists(yamlfile):
        stream = open(yamlfile, 'r')
        data = yaml.load_all(stream)
        knownimages = next(data)['images'] or []
        stream.close()

    #Generate a list of images that are there right now
    realimages = []
    for file in os.listdir(folderpath):
        if file.endswith(".jpg") or file.endswith(".jpeg"):
            realimages.append(file)
        elif file.endswith(".png"):
            realimages.append(file)

    #Some images may have been removed since the yaml was last updated
    #Let's remove those entries
    images = [img for img in knownimages if img in realimages]

    #Now get the images that need compressing and adding to the yaml
    newimages = [img for img in realimages if img not in knownimages]

    #Compress the image and remember it
    for image in newimages:
        imagepath = os.path.join(folder, image)
        #Compress, re-stage, and remember the images
        if imagepath in staged_files:
            if image.endswith(".jpg") or image.endswith(".jpeg"):
                os.system("convert " + imagepath + " -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG -colorspace RGB " + imagepath)
            elif image.endswith(".png"):
                os.system("optipng -quiet -o1 -strip all " + imagepath);
            repo.git.add(imagepath)
            #Remember the images
            images.append(image)

    #Write the new yaml
    with open(yamlfile, 'w+') as outfile:
        outfile.write("---\n")
        yaml.dump({'images':images}, outfile, default_flow_style=False)
        outfile.write("---")