<?php

  // connect script
  require 'connect.php';
  // json encoder
  require 'json_readable_encode.php';

  /* passed params */
  $currentID = $_GET['currentID'];

  /* get prev work info */
  $sql = " SELECT * FROM work_items WHERE id < '$currentID' ORDER BY id DESC LIMIT 1";

  $data = Array();

  $stmt = $DB->prepare($sql);
  $stmt->execute();
  $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

  // send result to encoder
  $json = json_readable_encode($data);

  echo $json;

  // close db conn
  $DB = null;

?>
