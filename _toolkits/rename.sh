#!/bin/bash
#Author: Coande  Email: e12e@qq.com
ls *.md > filename.list
for filename in $(cat filename.list)
	do
		title=$(cat $filename | grep title | sed -n '1p' | cut -d ":" -f 2 |  sed -e 's/ /_/g ; s/^_//g ; s/\//-/g ; s/\!/\\!/g')
		if [ -n "$title" -a "$filename" != "$title.md" ]
			then
				mv $filename $title.md
		fi
	done
rm -f filename.list
echo done!