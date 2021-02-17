<?php

  // connect script
  require 'connect.php';
  // json encoder
  require 'json_readable_encode.php';

  /* voice question row */

  $sql = "SELECT * FROM work_items ORDER BY RAND() LIMIT 1";

  $data = Array();

  $stmt = $DB->prepare($sql);
  $stmt->execute();
  $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

  //var_dump($data);
  //$json = json_encode($data);

  // send result to encoder
  $json = json_readable_encode($data);

  echo $json;

  // close db conn
  $DB = null;

?>
