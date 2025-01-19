For contributing to ExPack, all you need to do is run
1. Run `git clone`, command is below
```bash
git pull https://github.com/ExPackTeam/ExPack
```
2. Make a sub-directory in the root directory called "tests"
> This will be ignored by the [`.gitignore`](https://github.com/ExPackTeam/ExPack/blob/development/.gitignore) file
3. If you haven't already, open your code editor/IDE.
4. In the `tests` directory, make a file called "debugging.html" and "specifics.html"
> The `debugging.html` is for seeing everything, `specifics.html` is for testing individual aspects
5. Copy the HTML code below
```html
<!doctype html>
<html lang="en">
    <head>
        <title>Debugging Expack</title>
        <meta charset="utf-8">
        <meta name="description" content="debugging HTML file for ExPack">
        <meta name="author" content="Team Expack">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="../dist/css/expack.min.css" rel="stylesheet">
    </head>
    <body>
        <h1 class="fg-red">Testing {WHAT YOU'RE TESTING}</h1>
        <!-- Insert the HTML code you want to debug here -->
        <script src="../dist/js/expack.min.js"></script>
    </body>
</html>
```