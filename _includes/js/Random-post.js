<script type="text/javascript">

    var randomIndexUsed = [];
    var counter = 0;
    var numberOfPosts = 1;

    while (counter < numberOfPosts)
    {
        var randomIndex;
        var postHREF;
        var postTitle;
        var postDate;
        var postExcerpt;

        randomIndex = Math.floor(Math.random() * postsHREF.length);

        if (randomIndexUsed.indexOf(randomIndex) == "-1")
        {
            postHREF = postsHREF[randomIndex];
            postTitle = postsTitle[randomIndex];
            postDate = postsDate[randomIndex];
            postExcerpt = postsExcerpt[randomIndex];

            if (counter == (numberOfPosts - 1))
            {
                document.write('<p><a href="' + postHREF + '">' + postExcerpt + '</a></p>');
            }
            else
            {
                document.write('<p><a href="' + postHREF + '">' + postTitle + '</a></p><hr />');
            }

            randomIndexUsed.push(randomIndex);

            counter++;
        }
    }

</script>