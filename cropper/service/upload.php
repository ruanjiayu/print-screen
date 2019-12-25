<?php
$extension = pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION);
$image = $_FILES['file']['tmp_name'];
$base_path = '../upload/';

if(!is_dir($base_path)){
    if(!mkdir($base_path,0777,true)){
        echo json_encode(['status' => 0, 'msg' => '上传目录创建失败']);exit;
    }
}

$file_path = $base_path.time().'.'.$extension;
$dir = move_uploaded_file($image, $file_path);

if ($dir) {
	$status = 1;
	$msg = '上传成功';
}else{
	$status = 0;
	$msg = '上传失败';
}

echo json_encode(['status' => $status, 'msg' => $msg]);exit;
 ?>