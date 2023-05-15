<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>React tApp</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
  />
  <link
  href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200"
  rel="stylesheet"
/>
<link
  href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
  rel="stylesheet"
/>
<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }
    </style>
    <!-- <link href="{{mix('css/app.css')}}" type="text/css" rel="stylesheet" />-->
        @viteReactRefresh
        @vite(['resources/css/app.css','resources/js/app.jsx']) 
</head>
<body>

  <!-- React DOM Node -->
  <div id="app"></div>

  <!-- <script type="text/javascript" src="{{mix('js/app.js')}}"></script> -->
</body>
</html>