---
layout: page
title: resume
url: resume/
---

<style>
h3 {
font-style: italic;
&:after {
content: '';
margin-top: 1.2em;
margin-bottom: 1.2em;
opacity: .75;
width: 2em;
height: 1px;
display: block;
        }
}
.caption {
text-align: center;
vertical-align: middle;
.right {
margin-left: 280px;
padding-top: 2.75em;
margin-top: -10px;
overflow: hidden;
}
.h3 {
h3 {
margin: 0;
margin-top: calc(3em - 1vw)
}
}

.icon_row{
height: 150px;
width: 100%;
box-sizing: border-box;
padding: 5px;
display: inline;
& .icon_container {
display: inline-block !important;
text-align: center;
vertical-align: top;
width: 19%;
padding-bottom: 1em;
& p {
display: block;
        }
    }
}

.i {
max-height: 66px;
display: block;
    }
}
</style>

{% for resume in site.data.resume %}

<!-- span class="resume-info">
	<img>   
	<span>
		[{{ resume.email }}](mailto:{{ site.email }})  
		[github.com/{{ resume.github }}](https://github.com/{{ resume.github }}) 
	</span> 
</span> -->

# employment

{% for employer in resume.employment %}
- **{{ employer.employer }}** <!-- {{ employer.title }} --> *({{ employer.date }})*  
{{ employer.description }}
{% endfor %}

# education

<p style="line-height: 1.75;">
{% for school in resume.education %}
	<strong>{{ school.field }}</strong> {{ school.school }} <em>({{ school.degree }}, {{ school.year }})</em><br>
{% endfor %}
</p>

# skills

<div class="icon_row">
{% for skill in resume.skills %}
	<div class="/*icon_container*/">
		<img class="i" src="{{ site.baseurl }}{{ skill.icon }}" alt="" title="" />  
		<span class="caption date">{{ skill.skill }}</span>
	</div>
{% endfor %}
</div> 

- {{ resume.highlight }}

# tools

{{ resume.tools }}

# interests

{{ resume.interests }}

{% endfor %}