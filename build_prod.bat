REM WITHOUT CUSTOM DOMAIN ng build --prod --output-path docs --base-href /namsor-chinese-names/
REM WITH CUSTOM DOMAIN ng build --prod --output-path docs --base-href /
ng build --prod --output-path docs --base-href /
copy src\index.zh.html docs\index.zh.html

copy docs\index.html docs\404.html
copy src\robots.txt docs\robots.txt
copy src\sitemap.xml docs\sitemap.xml
copy CNAME docs\CNAME

REM you need to check that the deployment works and usually re-set Github Pages
