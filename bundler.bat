:: recreate an empty dist folder
rmdir /s/q dist
mkdir dist

:: copy the assets folder in the dist folder
Xcopy "src/assets" "dist/assets" /E /I

:: special pages
call ejs ./src/template.ejs -f ./src/pages_data/index-data.json -o ./dist/index.html
call ejs ./src/template.ejs -f ./src/pages_data/404-data.json -o ./dist/404.html
:: articles