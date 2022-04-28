:: recreate an empty dist folder
rmdir /s/q dist
mkdir dist
mkdir dist\articles

:: copy the assets folder in the dist folder
Xcopy "src/assets" "dist/assets" /E /I

:: add the content of src/pages_data/articles-list.json in the index and articles pages files.
:: we need to do this because it's not possible to pass several JSON to EJS bellow,
:: so the articles data that is needed in several pages must be added manually to
:: the single JSON file that we give to EJS.
call node jsonParser.js

:: special pages
call ejs ./src/template.ejs -f ./src/pages_data/index-data.json -o ./dist/index.html
call ejs ./src/template.ejs -f ./src/pages_data/404-data.json -o ./dist/404.html
call ejs ./src/template.ejs -f ./src/pages_data/services-data.json -o ./dist/services.html
call ejs ./src/template.ejs -f ./src/pages_data/about-data.json -o ./dist/about.html
call ejs ./src/template.ejs -f ./src/pages_data/contact-data.json -o ./dist/contact.html
call ejs ./src/template.ejs -f ./src/pages_data/articles-data.json -o ./dist/articles/index.html
:: articles
call ejs ./src/template.ejs -f ./src/pages_data/articles/collab-lagarde.json -o ./dist/articles/collab-lagarde.html
call ejs ./src/template.ejs -f ./src/pages_data/articles/rh-aw-pav.json -o ./dist/articles/rh-aw-pav.html
call ejs ./src/template.ejs -f ./src/pages_data/articles/gemviewr.json -o ./dist/articles/gemviewr.html