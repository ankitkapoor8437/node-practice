const express = require("express");
const usersData = require("./MOCK_DATA.json");

// app is a handler function
const app = express();

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

// Dynamic Path Parameters
// app.get('/api/users/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const user = usersData.find((users)=> users.id === id);
//     console.log(user);
//     return res.json(user);
// });

app.route("/api/users/:id").get((req, res) => {
    const id = Number(req.params.id);
    const user = usersData.find((users) => users.id === id);
    console.log(user);
    return res.json(user);
})
    .patch((req, res) => {
        return res.json({ status: "pending" })
    })
    .delete((req, res) => {
        return res.json({ status: "pending" })
    });


app.post('/api/users', (req, res) => {
    res.json({ status: "pending" })
});

// app.patch('/api/users/:id', (req, res) => {
//     res.json({ status: "pending" })
// });

// app.delete('/api/users/:id', (req, res) => {
//     res.json({ status: "pending" })
// });


const PORT = 9000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
