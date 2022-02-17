function generateHTML (data) {
return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <title>Document</title>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid bg-danger text-light">
            <div class="container">
                <h1 class="display-4">My Team</h1>
            </div>
        </div>

        <div class="row">
            ${data}
        </div>
    </body>
    </html>`
}

module.exports = generateHTML;
