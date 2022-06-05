---
layout: page
title: resume
url: resume/
---

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
	<div class="icon_container">
		<img class="icon" src="{{ site.baseurl }}{{ skill.icon }}" alt="" title="" />  
		<span class="caption">{{ skill.skill }}</span>
	</div>
{% endfor %}
</div>

- {{ resume.highlight }}

# tools

{{ resume.tools }}

# interests

{{ resume.interests }}

{% endfor %}