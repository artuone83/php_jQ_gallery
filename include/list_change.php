<?php
if(isset($_POST['list'])) {
$content = $_POST['list'];
$fp = fopen("list.php", "w");
fwrite($fp,$content );
fclose($fp);
echo $content; 
}
?>