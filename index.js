const express = require('express');
  const nodemailer = require('nodemailer');
const axios = require('axios')
const { exec } = require('child_process');
const app = express();
const port = 3000;
const port2 = 2000;
exec('clear')
// Menggunakan Nodemon untuk memantau perubahan
if (process.env.NODE_ENV === 'development') {
  exec('nodemon index.js');
  console.log(process.env.NODE_ENV);
  console.log("nodemon on")
}

// Buat transporter (konfigurasi email)
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Layanan email yang digunakan
  auth: {
    user: 'erd7email@gmail.com', // Alamat email Anda
    pass: 'pnjrujuutzzlkzoy' // Kata sandi email Anda
  }
});

// Mengatur direktori tempat file statis Anda berada
app.use(express.static('public'));



app.listen(port, () => {
  console.log(`Server berjalan diport:${port}`);
    console.log('{`log sistem diatas`}');
  console.log('{`log server dibawah`}');
});

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function liveConsole() {
  rl.question('all status ok\n', (command) => {
    eval(command);
    liveConsole();
  });
}

liveConsole();

app.use(express.json());
 
app.post('/youtube', (req, res) => {
  // Mengambil data dari PHP
  const dataFromPHP = req.body;
 logToBackup(dataFromPHP);
  console.log (dataFromPHP)
  exec('npm run start')

  // memunculkan p
  res.json({ server: 'pencarian di amankan oleh Node.js' });




  


// Buat pesan email
const mailOptions = {
  from: 'erd7email@gmail.com', // Alamat email pengirim
  to: 'admin@kangwifi.eu.org', // Alamat email penerima
  subject: 'Server',
  text: JSON.stringify(dataFromPHP) // Menggunakan JSON.stringify untuk mengonversi objek ke JSON
};
// Kirim email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Gagal mengirim email: ' + error);
  } else {
    console.log('Email berhasil dikirim: ' + info.response);
}
      });



       

});


  const fs = require('fs');
const logFilePath = 'data.txt'; // Nama file log

// Fungsi untuk menambahkan data log ke file
function logToBackup(data) {
  fs.appendFile(logFilePath, data + '\n', (err) => {
    if (err) {
      console.error('Gagal menyimpan data log ke file backup:', err);
    } else {
      console.log('Data log tersimpan dalam file backup.');
    }
  });
}

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/data.txt') {
    // Baca file ip.txt
    fs.readFile('data.txt', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('File not found');
  }

})



