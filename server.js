const express = require("express");
const usersData = require("./MOCK_DATA.json");
const fs = require("fs");
const { error } = require("console");

// app is a handler function
const app = express();
const PORT = 9000;

app.use(express.json())
// SSR
app.get('/users', (req, res) => {
    const html = ` <ul>
            ${usersData.map((users) => `<li>${users.first_name}</li>`).join("")}
        </ul>`
    res.send(html);
});

// CSR
app.get('/api/users/', (req, res) => {
    return res.json(usersData);
});

app.route("/api/users/:id").get((req, res) => {
    const id = Number(req.params.id);
    const user = usersData.find((users) => users.id === id);
    console.log(user);
    return res.json(user);
})
    .patch((req, res) => {
        const id = Number(req.params.id);
        const { first_name, last_name, email, gender, job_title } = req.body;
        const dataToUpdate = usersData.find((users) => users.id === id);
        console.log(dataToUpdate)
        if (dataToUpdate) {
            if (first_name) {
                dataToUpdate.first_name =first_name;
            }
            
            if (last_name) {
                dataToUpdate.last_name =last_name;
            }
            
            if (email) {
                dataToUpdate.email =email;
            }
            
            if (gender) {
                dataToUpdate.gender =gender;
            }
            
            if (job_title) {
                dataToUpdate.job_title =job_title;
            }
        }
          // Write the updated data to the JSON file
          fs.writeFile('./MOCK_DATA.json', JSON.stringify(usersData), (error) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            return res.json(usersData);
        });
    })
    .delete((req, res) => {
        const id = Number(req.params.id);
        const updatedUsersData = usersData.filter((user) => user.id !== id);

        if (updatedUsersData.length < usersData.length) {
            // Write the updated data to the JSON file
            fs.writeFile('./MOCK_DATA.json', JSON.stringify(updatedUsersData), (error) => {
                if (error) {
                    console.error(error);
                    return res.status(500).json({ error: 'Internal Server Error' });
                }
                return res.json({ status: `${updatedUsersData.length}` });
            });
        } else {
            // If the user with the given id is not found, return a 404 response
            return res.status(404).json({ error: 'User not found' });
        }
    });


app.post('/api/users', (req, res) => {
    const data = req.body;
    usersData.push({ ...data, id: usersData.length + 1 });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(usersData), (error, result) => {
        if (error) {
            return res.send(error);
        } else {
            return res.json({ status: "Success", id: usersData.length });
        }
    })

});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
