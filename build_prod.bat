REM WITHOUT CUSTOM DOMAIN ng build --prod --output-path docs --base-href /namsor-chinese-names/
REM WITH CUSTOM DOMAIN ng build --prod --output-path docs --base-href /
ng build --prod --output-path docs --base-href /namsor-chinese-names/
copy docs\index.html docs\404.html
copy src\robots.txt docs\robots.txt
copy src\sitemap.xml docs\sitemap.xml
REM you need to check that the deployment works and usually re-set Github Pages
