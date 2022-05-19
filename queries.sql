-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

-- GET /api/schemes
    -- response:
    -- [ { scheme_id: 1, scheme_name: "World Domination", number_of_steps: 3 }, { scheme_id: 2, scheme_name: "Get Rich Quick", number_of_steps: } ...]

SELECT * FROM schemes LEFT JOIN steps ON schemes.scheme_id = steps.scheme_id ;  

SELECT  schemes.*,  
        count(*) as number_of_steps 
    FROM schemes 
        LEFT JOIN steps 
            ON schemes.scheme_id = steps.scheme_id  
        GROUP BY schemes.scheme_id ;


      SELECT
          sc.*,
          count(st.step_id) as number_of_steps
      FROM schemes as sc
      LEFT JOIN steps as st
          ON sc.scheme_id = st.scheme_id
      GROUP BY sc.scheme_id
      ORDER BY sc.scheme_id ASC;