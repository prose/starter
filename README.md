Fluid Charter Doc Seed
======================

This project was created based on the L.L.Bean Responsible Web Design
Analysis charter document originally authored by Seamus Roche.  It uses ruby and
the [jekyll project](http://jekyllrb.com) to generate and serve a nicely designed 
and organized web site that can be used to create a Charter Document for a client
engagement that can be shared with the client as it is authored.

In addition, the project has a shell script that can be used to generate a pdf file
that can be delivered as a standalone printable document to the client.

The contents of the site are stored as a series of 
[Markdown](http://daringfireball.net/projects/markdown/syntax) 'posts' 
that can be stored and versioned in a source control repository.  The layout and 
look and feel of the site are achieved via plain html/css.

Getting Started
---------------

### Requirements

In order to run this project you will have to install ruby-1.9.3 and the [jekyll
gem](http://jekyllrb.com). If you want to generate a pdf file, you will also
need to install the wkhtmltopdf gem.  Installation of ruby is beyond the scope
of this document.  It's not the 12 labors of Heracles, but it may try your
patience.  We provide a short synopsis below.

We recommend that you install ruby using [rvm, the Ruby Version
Manager](https://rvm.ior/rvm/install), which enables you to easily install and switch
between various versions of ruby.

If you don't trust your bash skills, you can try [Jewelry Box, the offical OSX rvm 
GUI](https://unfiniti.com/software/mac/jewelrybox).


If you are not afraid of using a bash shell, and you have curl installed,
you can install rvm/ruby/jekyll as follows:

### Installing rvm and ruby

First install rvm:

	$ curl -ssl https://get.rvm.io | bash -s stable

If rvm installed properly, you can install the necessary version of ruby:

	$ rvm install 1.9.3

Assuming that this installed ruby-1.9.3-p484 (or whatever the build number may
be), create a .ruby-version file so that rvm activates that version of ruby
automatically when you enter this folder (or change directory to whatever
folder contains the jekyll project that you want to run):

	$ rvm rvmrc create 1.9.3-p484  --ruby-version

At this point, you can test that ruby-1.9.3.x installed properly and is active
by running:

	$ ruby -v
	>> ruby 1.9.3p484 ....

If you have never installed ruby or rvm, and have gotten this far, pat yourself on the
back, you have done well my young apprentice.  If you have gotten stuck along
the way, reach out to a ruby geek near you who can lend you a hand. Offer the
beer only after the work is done.

### Installing and running Jekyll

If ruby is properly installed, Jekyll should be a lot easier to install, simply run:

	$ gem install jekyll

If jekyll installed without errors, you should be able to run the project by
running:

	$ jekyll serve
	>>>
	  configuration file: /path/to/your/project/_config.yml
	          Source: /path/to/your/project
	     Destination: /path/to/your/project/_site
        Generating... done.
	  Server address: http://0.0.0.0:4000
	Server running... press ctrl-c to stop.

Note in the output indicating the Server address at which the site is being
served, most likely http://0.0.0.0:4000.  Open that url with your favorite
browser, and behold the beauty of your very own jekyll site.

Please note that jekyll will not run on ruby-2.x as of this writing (Feb. 2014).
If you get a nasty core dump when attempting to run jekyll, check your version
of ruby by running 'ruby -v'.

If the incorrect version of ruby is active, try:

	$ rvm list 
	$ rvm use ruby-1.9.3-p327

or whatever the proper version of ruby 1.9.3 that was installed on your machine,
based on the 'rvm list' output.  If the proper version of ruby is not made
active when you cd into the directory, something is wrong with your
.ruby-version or .rvmrc file, or your rvm configuration.  Again, reach out to
your nearest ruby master to lend you a hand if this becomes an annoyance.

You can also consult the [jekyll site](http://jekyllrb.com) for help on jekyll
specific issues, and for more documentation on jekyll.

### Generating a PDF

In addition, it is possible to generate a PDF for the site using the wkhtmltopdf
gem, and the buildPDF.sh script included.  This script uses wkhtmltopdf to create
headers, footers and combine the files in the order you provide. Modify the
buildPDF.sh to reorder pages to fit your needs.  

First install the gem, a one time step:

	$ gem install wkhtmltopdf-binary

Then whenever you wish to publish the latest pdf version, run:

	$ ./buildPDF.sh
