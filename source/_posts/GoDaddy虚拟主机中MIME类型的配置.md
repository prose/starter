title: GoDaddy虚拟主机中MIME类型的配置
tags:
  - 配置
id: 601
categories:
  - 建站❤编程
date: 2010-01-24 13:26:08
---

godaddy提供的免费空间有强制广告，用来做下载站或图床是比较合适的-速度够快，不过默认情况下linux空间只能打开或下载.jpg格式的文件，其他文件打开是以文本格式，也无法下载，查了下资料，只要mime类型配置好，就可以和平时用的正常虚拟主机一样设置打开相应类型文件的程序了。

## GoDaddy windows虚拟主机

配置的MIME类型以下MIME类型配置在GoDaddy  windows虚拟主机上
<table cellspacing="0">
<tbody>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">**文件扩展名**</span></span></td>
<td width="407">**<span style="font-family: 宋体;"><span style="font-size: small;">文件类型  (MIME)</span></span>**</td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">0.323</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/h323</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.aaf</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.aca</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.acx</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/internet-property-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.afm</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.ai</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/postscript</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.aif</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">audio/x-aiff</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.aifc</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">audio/aiff</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.aiff</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">audio/aiff</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.applicati</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-ms-application</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.art</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">image/x-jg<!--more-->
</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.asd</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.asf</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">video/x-ms-asf</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.asi</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.asm</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/plain</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.asr</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">video/x-ms-asf</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.asx</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">video/x-ms-asf</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.au</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">audio/basic</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.avi</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">video/x-msvideo</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.axs</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/olescript</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.bas</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/plain</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.bcpio</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-bcpio</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.bin</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.bmp</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">image/bmp</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.c</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/plain</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.cab</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.cat</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.ms-pki.seccat</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.cdf</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-cdf</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.chm</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.class</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-java-applet</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.clp</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-msclip</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.cmx</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">image/x-cmx</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.cnf</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/plain</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.cod</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">image/cis-cod</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.cpio</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-cpio</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.cpp</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/plain</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.crd</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-mscardfile</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.crl</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/pkix-crl</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.crt</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-x509-ca-cert</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.csh</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-csh</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.css</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/css</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.csv</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.cur</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.dcr</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-director</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.deploy</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.der</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-x509-ca-cert</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.dib</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">image/bmp</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.dir</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-director</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.disco</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/xml</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.dll</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-msdownload</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.dlm</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/dlm</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.doc</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/msword</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.dot</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/msword</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.dsp</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.dtd</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/xml</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.dvi</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-dvi</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.dwf</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">drawing/x-dwf</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.dwp</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.dxr</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-director</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.easm</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.eml</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">message/rfc822</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.emz</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.eot</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.eps</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/postscript</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.etx</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/x-setext</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.evy</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/envoy</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.ex_</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.exe</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.fdf</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.fdf</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.fif</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/fractals</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.fla</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.flr</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">x-world/x-vrml</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.gif</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">image/gif</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.gtar</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-gtar</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.gz</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-gzip</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.h</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/plain</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.hdf</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-hdf</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.hdml</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/x-hdml</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.hhc</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-oleobject</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.hhk</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.hhp</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.hlp</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/winhlp</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.hqx</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/mac-binhex40</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.hsf</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.hta</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/hta</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.htc</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/x-component</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.htm</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/html</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.html</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/html</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.htt</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/webviewhtml</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.hxt</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/html</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.ica</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-ica</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.ico</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">image/x-icon</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.ics</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.ief</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">image/ief</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.iii</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-iphone</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.inf</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.ins</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-internet-signup</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.isp</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-internet-signup</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.IVF</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">video/x-ivf</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.jar</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/java-archive</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.java</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.jck</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/liquidmotion</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.jcz</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/liquidmotion</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.jfif</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">image/pjpeg</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.jpb</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.jpe</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">image/jpeg</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.jpeg</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">image/jpeg</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.jpg</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">image/jpeg</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.js</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-javascript</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.latex</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-latex</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.lit</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-ms-reader</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.lpk</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.lsf</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">video/x-la-asf</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.lsx</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">video/x-la-asf</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.lzh</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.m13</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-msmediaview</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.m14</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-msmediaview</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.m1v</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">video/mpeg</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.m3u</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">audio/x-mpegurl</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.man</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-troff-man</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.manifest</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-ms-manifest</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.map</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/plain</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.mdb</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-msaccess</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.mdp</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.me</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-troff-me</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.mht</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">message/rfc822</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.mhtml</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">message/rfc822</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.mid</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">audio/mid</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.midi</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">audio/mid</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.mix</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.mmf</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-smaf</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.mno</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/xml</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.mny</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-msmoney</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.mov</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">video/quicktime</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.movie</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">video/x-sgi-movie</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.mp2</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">video/mpeg</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.mp3</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">audio/mpeg</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.mp4</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">audio/mpeg</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.mpa</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">video/mpeg</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.mpe</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">video/mpeg</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.mpeg</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">video/mpeg</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.mpg</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">video/mpeg</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.mpp</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.ms-project</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.mpv2</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">video/mpeg</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.ms</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-troff-ms</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.msi</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.mvb</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-msmediaview</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.nc</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-netcdf</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.nsc</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">video/x-ms-asf</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.nws</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">message/rfc822</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.ocx</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.oda</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/oda</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.ods</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/oleobject</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.p10</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/pkcs10</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.p12</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-pkcs12</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.p7b</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-pkcs7-certificates</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.p7c</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/pkcs7-mime</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.p7m</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/pkcs7-mime</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.p7r</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-pkcs7-certreqresp</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.p7s</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/pkcs7-signature</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.pbm</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">image/x-portable-bitmap</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.pcx</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.pcz</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.pdf</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/pdf</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.pfb</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.pfm</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.pfx</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-pkcs12</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.pgm</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">image/x-portable-graymap</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.pko</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.ms-pki.pko</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.pma</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-perfmon</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.pmc</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-perfmon</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.pml</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-perfmon</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.pmr</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-perfmon</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.pmw</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-perfmon</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.png</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">image/png</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.pnm</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">image/x-portable-anymap</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.pnz</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">image/png</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.pot</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.ms-powerpoint</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.ppm</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">image/x-portable-pixmap</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.pps</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.ms-powerpoint</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.ppt</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.ms-powerpoint</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.prf</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/pics-rules</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.prm</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.prx</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.ps</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/postscript</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.psd</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.psm</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.psp</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.pub</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-mspublisher</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.qt</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">video/quicktime</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.qtl</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-quicktimeplayer</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.qxd</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.ra</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">audio/x-pn-realaudio</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.ram</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">audio/x-pn-realaudio</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.rar</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.ras</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">image/x-cmu-raster</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.rdf</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/rdf+xml</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.rf</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">image/vnd.rn-realflash</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.rgb</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">image/x-rgb</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.rm</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.rn-realmedia</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.rmi</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">audio/mid</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.roff</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-troff</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.rpm</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">audio/x-pn-realaudio-plugin</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.rtf</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/rtf</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.rtx</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/richtext</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.scd</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-msschedule</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.sct</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/scriptlet</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.sea</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.setpay</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/set-payment-initiation</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.setreg</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/set-registration-initiation</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.sgml</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/sgml</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.sh</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-sh</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.shar</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-shar</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.sit</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-stuffit</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.sldasm</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.sldprt</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.smd</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">audio/x-smd</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.smi</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.smx</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">audio/x-smd</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.smz</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">audio/x-smd</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.snd</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">audio/basic</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.snp</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.spc</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-pkcs7-certificates</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.spl</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/futuresplash</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.src</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-wais-source</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.ssm</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/streamingmedia</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.sst</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.ms-pki.certstore</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.stl</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.ms-pki.stl</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.sv4cpio</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-sv4cpio</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.sv4crc</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-sv4crc</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.svg</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.swf</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-shockwave-flash</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.t</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-troff</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.tar</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-tar</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.tcl</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-tcl</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.tex</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-tex</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.texi</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-texinfo</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.texinfo</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-texinfo</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.tgz</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-compressed</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.thn</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.tif</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">image/tiff</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.tiff</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">image/tiff</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.toc</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.tr</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-troff</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.trm</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-msterminal</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.tsv</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/tab-separated-values</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.ttf</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.txt</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/plain</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.u32</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.uls</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/iuls</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.ustar</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-ustar</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.vbs</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/vbscript</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.vcf</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/x-vcard</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.vcs</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/plain</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.vdx</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.visio</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.vml</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/xml</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.vsd</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.visio</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.vss</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.visio</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.vst</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.visio</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.vsw</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.visio</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.vsx</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.visio</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.vtx</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.visio</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.wav</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">audio/wav</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.wax</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">audio/x-ms-wax</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.wbmp</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">image/vnd.wap.wbmp</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.wcm</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.ms-works</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.wdb</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.ms-works</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.wks</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.ms-works</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.wm</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">video/x-ms-wm</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.wma</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">audio/x-ms-wma</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.wmd</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-ms-wmd</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.wmf</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-msmetafile</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.wml</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/vnd.wap.wml</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.wmlc</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.wap.wmlc</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.wmls</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/vnd.wap.wmlscript</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.wmlsc</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.wap.wmlscriptc</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.wmp</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">video/x-ms-wmp</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.wmv</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">video/x-ms-wmv</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.wmx</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">video/x-ms-wmx</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.wmz</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-ms-wmz</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.world</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.wps</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.ms-works</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.wri</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-mswrite</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.wrl</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">x-world/x-vrml</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.wrz</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">x-world/x-vrml</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.wsdl</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/xml</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.wvx</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">video/x-ms-wvx</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.x</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/directx</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.xaf</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">x-world/x-vrml</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.xbm</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">image/x-xbitmap</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.xdr</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/plain</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.xla</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.ms-excel</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.xlc</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.ms-excel</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.xlm</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.ms-excel</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.xls</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.ms-excel</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.xlt</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.ms-excel</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.xlw</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/vnd.ms-excel</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.xml</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/xml</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.xof</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">x-world/x-vrml</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.xpm</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">image/x-xpixmap</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.xsd</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/xml</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.xsf</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/xml</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.xsl</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/xml</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.xslt</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">text/xml</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.xsn</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/octet-stream</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.xwd</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">image/x-xwindowdump</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.z</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-compress</span></span></td>
</tr>
<tr>
<td width="142"><span style="font-family: 宋体;"><span style="font-size: small;">.zip</span></span></td>
<td width="407"><span style="font-family: 宋体;"><span style="font-size: small;">application/x-zip-compressed</span></span></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td colspan="2"><span style="font-family: 宋体;"><span style="font-size: small;">请联系 Advanced Hosting  Support增加MIME类型</span></span></td>
</tr>
</tbody>
</table>

## GoDaddy Linux虚拟主机

通过.htaccess配置MIME 详情参考：[<span style="color: #810081;">http://help.godaddy.com/article/375</span>](http://help.godaddy.com/article/375)

在.htaccess文件中将文件类型和应用程序对应起来。比如，配置Flash的swf类型的文件代码:AddType application/x-shockwave-flash swf 其中  **AddType** 表示新增加MIME类型（也就是文件类型）；  **application/x-shockwave-flash** 指定MIME的类型； **swf** 是文件类型的扩展名。

格式都是类似于AddType application/x-shockwave-flash swf的，将其中的mime类型和文件类型扩展名与上表（windows下MIME类型配置）对应起来就行啦。。。