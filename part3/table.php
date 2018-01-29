<html>
    <head>
        
    </head>
    <body>
         <?php
	    $servername = getenv('IP');
        $username = getenv('C9_USER');
        $password = "";
        $database = "c9";
        $dbport = 3306;
        $db = new mysqli($servername, $username, $password, $database, $dbport);
        if ($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
    } 
        echo "The following people have registered";
        echo"<br>";
        $sql= 'SELECT * FROM Users';
        $results= $db->query($sql);
        if($results->num_rows>0){
            echo "<table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th class='c1'>User Name</th>
                <th class='c1'>Email</th>
                <th class='c1'>Last Login</th>
                <th class='c1'>Digest</th>
                <th class='c1'>Failed Attempts</th>
                <th class='c1'></th>
              



            </tr>";
            while($row=$results->fetch_assoc()){
              echo "<tr>
                        <td> ". $row["firstname"] ."</td>
                        <td>". $row["lastname"]."</td>
                        <td class='c1'>".$row["username"]."</td>
                        <td class='c2'>".$row["email"]."</td>
                        <td class='c1'>".$row["last_login"]."</td>
                        <td class='c1'>".$row["password_digest"]."</td>
                        <td class='c1'>".$row["failed_attempts"]."</td>"."</tr>";
            }
            echo "</table>";
        
        }

        
		?>
    </body>
</html>