
$folderExists = Test-Path c:\simple_api_data\db

if ($folderExists) {
    cd "C:\Program Files\MongoDB\Server\4.2\bin\"
    ./mongod.exe --dbpath="c:\simple_api_data\db"
}
else {
    mkdir c:\simple_api_data\db
    cd "C:\Program Files\MongoDB\Server\4.2\bin\"
    ./mongod.exe --dbpath="c:\simple_api_data\db"
}


