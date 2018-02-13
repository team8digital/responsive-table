# Responsive Table - Open Source Plugin

[![Wercker](https://img.shields.io/wercker/ci/wercker/docs.svg)]()

## About this plugin

plugin detail text

## Install & Setup

Download the repo to your local machine and install into your project using the following install procedure.

**Download the project:**
```
git clone https://github.com/team8digital/responsive-table.git
```

**Setup your HTML:**
```
<!DOCTYPE html>
<html>
  <head>

    <title>Your Title</title>>

    <!-- Load jQuery 2x -->
    <script src="js/jquery-2.2.4-min.js"></script>

    <!-- CSS Normalise (optional) -->
    <link href="css/normalise.css" rel="stylesheet" type="text/css">

    <!-- Include the plugin base styling -->
    <link href="css/responsive-table.css" rel="stylesheet" type="text/css">

  </head>
  <body>

    . . .

    <!-- Load the Plugin -->
    <script src="js/jquery.responsive-table.js"></script>

    <!-- Initialise Plugin -->
    <script>

    $(function() {

      $("#table").responsiveTables();

    });

    </script>

  </body>
</html>
```

**Add your Table markup:**
```
<table id="table" class="responsive-table-example">
  <thead>
    <tr>
      <th>Example Heading 01</th>
      <th>Example Heading 02</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Your Data</td>
      <td>Your Data</td>
    </tr>
    <tr>
      <td>Your Data</td>
      <td>Your Data</td>
    </tr>
  </tbody>
</table>
```

## Settings

```
<script>

$(function() {

  $("#table").responsiveTables({

    color: 'HEX-COLOUR-HERE'

  });

});

</script>
```
