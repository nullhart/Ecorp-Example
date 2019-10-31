
cd .\ImportData

$ImportDataDir = $pwd

$agentsData = (Get-ChildItem "./agents.json").FullName

$customersData = (Get-ChildItem "./customers.json").FullName

cd "C:\Program Files\MongoDB\Server\4.2\bin\"

./mongoimport --db test --collection agents --type json --drop --file $agentsData  --jsonArray

./mongoimport --db test --collection customers --type json --drop --file $customersData  --jsonArray

