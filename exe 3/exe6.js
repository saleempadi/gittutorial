var i, j,N=5; 
for(i=1; i<=N; i++)
    {
        for(j=1; j<=N; j++)
        {
            if(i==1 || i==N || j==1 || j==N)
            {
               
                console.log("*");
            }
            else
            {
               console.log(" ");
            }
        }
 
       console.log("\n");
    }
