# Responsive Table - Open Source Plugin

[![Wercker](https://img.shields.io/wercker/ci/wercker/docs.svg)]()

## About this plugin

We decided to create this tiny, efficient plugin that turns regular tables into responsive tables on a smaller screen. The only other possible solution is to create a parent div and set a overflow on this. Our solutions requires no extra divs.

Simply install the plugin, link the jQuery and jQuery Plugin files and Initialise the plugin

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

## License

This tiny plugin is open source, feel free to credit us by linking to: http://team8digital.uk/
