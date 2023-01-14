<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="./src/favicon.ico">
  <link rel="stylesheet" href="./dist/style.css">
  <title>萬年曆作業</title>
</head>

<body>
  <h1>萬年曆</h1>
  <?php
  $cal = [];
  $month = (isset($_GET['m'])) ? $_GET['m'] : date("n");
  $year = (isset($_GET['y'])) ? $_GET['y'] : date("Y");
  $nextMonth = $month + 1;
  $prevMonth = $month - 1;
  if ($nextMonth > 13) {
    $year = $year + 1;
    $month = 1;
    $nextMonth = 2;
    $prevMonth = 0;
  }
  if ($prevMonth < 0) {
    $year = $year - 1;
    $month = 12;
    $prevMonth = 11;
    $nextMonth = 13;
  }
  $firstDay = $year . "-" . $month . "-1";
  $firstDayWeek = date("N", strtotime($firstDay));
  $monthDays = date("t", strtotime($firstDay));
  $lastDay = $year . '-' . $month . '-' . $monthDays;
  $spaceDays = $firstDayWeek - 1;
  $weeks = ceil(($monthDays + $spaceDays) / 7);
  for ($i = 0; $i < $spaceDays; $i++) {
    $cal[] = '';
  }
  for ($i = 0; $i < $monthDays; $i++) {
    $cal[] = date("d", strtotime("+$i days", strtotime($firstDay)));
  }
  for ($i = 0; $i < ($weeks * 7 - $monthDays - $spaceDays); $i++) {
    $cal[] = '';
  }
  ?>
  <div class="cal">
    <div class="nav">
      <a href="?y=<?= $year; ?>&m=<?= $prevMonth; ?>">上個月</a>
      <p><?= $year; ?> 年 <?= $month; ?> 月份 </p>
      <a href="?y=<?= $year; ?>&m=<?= $nextMonth; ?>">下個月</a>
    </div>
    <table>
      <?php
      foreach ($cal as $i => $day) {
        if ($i % 7 == 0) {
          echo "<tr>";
        }
        if (($i % 7 == 5 || $i % 7 == 6) && $cal[$i] != "") {
          echo "<td class='weekend'>$day</td>";
        } else {
          if ($cal[$i] != "") {
            echo "<td class='day'>$day</td>";
          } else {
            echo "<td>$day</td>";
          }
        }
        if ($i % 7 == 6) {
          echo "</tr>";
        }
      }
      ?>
    </table>
  </div>
</body>

</html>