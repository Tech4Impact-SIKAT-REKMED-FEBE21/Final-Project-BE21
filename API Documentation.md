# **API Documentation Final Project Back-End**

## **CRUD Admin dan User**

### **Register Admin**
Request
```
POST : https://final-project-be21-production.up.railway.app/user/register
```

Body
```json
{
  "nama": "admin",
  "email": "admin@gmail.com",
  "password": "admin2002",
  "umur": "25",
  "isAdmin": "true"
}
```

Response
```json
{
  "status": "success",
  "message": "akun berhasil dibuat"
}
```

### **Login Admin**
Request
```
POST : https://final-project-be21-production.up.railway.app/user/login
```

Body
```json
{
  "email": "admin@gmail.com",
  "password": "admin2002"
}
```

Response
```json
{
  "status": "success",
  "message": "user berhasil login",
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2Y2IzYTRkMzQ5YWEzOGE1MGNlYTAiLCJpYXQiOjE2Njk3Nzg3NzV9.W58Xafa9ScwTFRMHEKwNNiOpHCkQ7swHmX9TL01JaFs"
}
```

### **Get Profile Admin**
Request
```
GET : https://final-project-be21-production.up.railway.app/user/profile
```

Masukkan Authorization dari login admin
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2Y2IzYTRkMzQ5YWEzOGE1MGNlYTAiLCJpYXQiOjE2Njk3Nzg3NzV9.W58Xafa9ScwTFRMHEKwNNiOpHCkQ7swHmX9TL01JaFs
```

Response
```json
{
  "status": "success",
  "message": "user ditemukan",
  "data": {
    "_id": "6386cb3a4d349aa38a50cea0",
    "nama": "admin",
    "email": "admin@gmail.com",
    "umur": 25,
    "__v": 0
  }
}
```

### **Update Profile Admin**
Request
```
PUT : https://final-project-be21-production.up.railway.app/user/profile
```

Masukkan Authorization dari login admin
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2Y2IzYTRkMzQ5YWEzOGE1MGNlYTAiLCJpYXQiOjE2Njk3Nzg3NzV9.W58Xafa9ScwTFRMHEKwNNiOpHCkQ7swHmX9TL01JaFs
```

Body
```json
{
  "nama": "admin",
  "email": "admin@gmail.com",
  "password": "admin2002",
  "umur": "24",
  "isAdmin": "true"
}
```

Response
```json
{
  "status": "success",
  "message": "profil berhasil diperbarui"
}
```

### **Register User**
Request
```
POST : https://final-project-be21-production.up.railway.app/user/register
```

Body
```json
{
  "nama": "icha",
  "email": "icha@gmail.com",
  "password": "icha20",
  "umur": "10"
}
```

Response
```json
{
  "status": "success",
  "message": "akun berhasil dibuat"
}
```

### **Login User**
Request
```
POST : https://final-project-be21-production.up.railway.app/user/login
```

Body
```json
{
  "email": "icha@gmail.com",
  "password": "icha20"
}
```

Response
```json
{
  "status": "success",
  "message": "user berhasil login",
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2ZDE0OTRkMzQ5YWEzOGE1MGNlYWUiLCJpYXQiOjE2Njk3Nzk4Mjl9.yJZhK0kn7HZ8t611t_8u1zmKdtS91cCRGCZCo6bRL_Y"
}
```

### **Get All User (Admin)**
Request
```
GET : https://final-project-be21-production.up.railway.app/user/allUser
```

Masukkan Authorization dari login admin
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2Y2IzYTRkMzQ5YWEzOGE1MGNlYTAiLCJpYXQiOjE2Njk3Nzg3NzV9.W58Xafa9ScwTFRMHEKwNNiOpHCkQ7swHmX9TL01JaFs
```

Response
```json
{
  "status": "success",
  "message": "semua user berhasil ditemukan",
  "data": [
    {
      "_id": "6386cb3a4d349aa38a50cea0",
      "nama": "admin",
      "email": "admin@gmail.com",
      "umur": 24,
      "isAdmin": true,
      "__v": 0
    },
    {
      "_id": "6386d0b94d349aa38a50ceab",
      "nama": "admin2",
      "email": "admin2@gmail.com",
      "umur": 26,
      "isAdmin": true,
      "__v": 0
    },
    {
      "_id": "6386d1494d349aa38a50ceae",
      "nama": "icha",
      "email": "icha@gmail.com",
      "umur": 10,
      "isAdmin": false,
      "__v": 0
    },
    {
      "_id": "6386d1ed4d349aa38a50ceb2",
      "nama": "anya",
      "email": "anya@gmail.com",
      "umur": 20,
      "isAdmin": false,
      "__v": 0
    }
  ]
}
```

### **Get User By Id (Admin)**
Request
```
GET : https://final-project-be21-production.up.railway.app/user/6386d1494d349aa38a50ceae
```

Masukkan Authorization dari login admin
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2Y2IzYTRkMzQ5YWEzOGE1MGNlYTAiLCJpYXQiOjE2Njk3Nzg3NzV9.W58Xafa9ScwTFRMHEKwNNiOpHCkQ7swHmX9TL01JaFs
```

Response
```json
{
  "status": "success",
  "message": "user berhasil ditemukan",
  "data": {
    "_id": "6386d1494d349aa38a50ceae",
    "nama": "icha",
    "email": "icha@gmail.com",
    "umur": 10,
    "isAdmin": false,
    "__v": 0
  }
}
```

### **Update User By Id (Admin)**
Request
```
PUT : https://final-project-be21-production.up.railway.app/user/6386d1494d349aa38a50ceae
```

Masukkan Authorization dari login admin
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2Y2IzYTRkMzQ5YWEzOGE1MGNlYTAiLCJpYXQiOjE2Njk3Nzg3NzV9.W58Xafa9ScwTFRMHEKwNNiOpHCkQ7swHmX9TL01JaFs
```

Body
```json
{
"nama": "icha",
"email": "icha@gmail.com",
"password": "icha20",
"umur": "30"
}
```

Response
```json
{
  "status": "success",
  "message": "data user berhasil diperbarui",
  "data": {
    "_id": "6386d1494d349aa38a50ceae",
    "nama": "icha",
    "email": "icha@gmail.com",
    "password": "icha20",
    "umur": 30,
    "isAdmin": false,
    "__v": 0
  }
}
```

### **Delete User By Id (Admin)**
Request
```
DELETE : https://final-project-be21-production.up.railway.app/user/6386d1494d349aa38a50ceae
```

Masukkan Authorization dari login admin
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2Y2IzYTRkMzQ5YWEzOGE1MGNlYTAiLCJpYXQiOjE2Njk3Nzg3NzV9.W58Xafa9ScwTFRMHEKwNNiOpHCkQ7swHmX9TL01JaFs
```

Response
```json
{
  "status": "success",
  "message": "user berhasil dihapus"
}
```

## **CRUD Input Data Pasien**

### **Add Pasien (Admin)**
Request
```
POST : https://final-project-be21-production.up.railway.app/dokter/addPasien
```

Masukkan Authorization dari login admin
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2Y2IzYTRkMzQ5YWEzOGE1MGNlYTAiLCJpYXQiOjE2Njk3Nzg3NzV9.W58Xafa9ScwTFRMHEKwNNiOpHCkQ7swHmX9TL01JaFs
```

Body 
```json
{
  "nik": "2005101085",
  "nama": "anjis",
  "tglLahir": "2002-01-02",
  "umur": "20",
  "jk": "laki-laki",
  "alamat": "Ngawi",
  "noHp": "098173657235"
}
```
Response
```json
{
  "message": "data has been created!"
}
```

### **Get All Pasien (Admin)**
Request
```
GET : https://final-project-be21-production.up.railway.app/dokter/pasien/all
```

Masukkan Authorization dari login admin
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2Y2IzYTRkMzQ5YWEzOGE1MGNlYTAiLCJpYXQiOjE2Njk3Nzg3NzV9.W58Xafa9ScwTFRMHEKwNNiOpHCkQ7swHmX9TL01JaFs
```

Response
```json
{
  "message": "Getting Data",
  "data": [
    {
      "_id": "6386db1f8a9c1d49a1ef2707",
      "nik": "2005101085",
      "nama": "anjis",
      "tglLahir": "2002-01-02T00:00:00.000Z",
      "umur": "20",
      "jk": "laki-laki",
      "alamat": "Ngawi",
      "noHp": "098173657235"
    },
    {
      "_id": "6386db9c8a9c1d49a1ef270b",
      "nik": "200510285",
      "nama": "fala",
      "tglLahir": "2002-03-05T00:00:00.000Z",
      "umur": "20",
      "jk": "perempuan",
      "alamat": "Madiun",
      "noHp": "093856173856"
    },
    {
      "_id": "6386dc388a9c1d49a1ef2712",
      "nik": "20486935",
      "nama": "kiki",
      "tglLahir": "2002-05-05T00:00:00.000Z",
      "umur": "20",
      "jk": "laki-laki",
      "alamat": "Magetan",
      "noHp": "02647194678"
    }
  ]
}
```

### **Get Pasien By NIK (Admin)**
Request
```
GET : https://final-project-be21-production.up.railway.app/dokter/pasien/200510285
```

Masukkan Authorization dari login admin
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2Y2IzYTRkMzQ5YWEzOGE1MGNlYTAiLCJpYXQiOjE2Njk3Nzg3NzV9.W58Xafa9ScwTFRMHEKwNNiOpHCkQ7swHmX9TL01JaFs
```

Response
```json
{
  "message": "You Searched for",
  "data": {
    "_id": "6386db9c8a9c1d49a1ef270b",
    "nik": "200510285",
    "nama": "fala",
    "tglLahir": "2002-03-05T00:00:00.000Z",
    "umur": "20",
    "jk": "perempuan",
    "alamat": "Madiun",
    "noHp": "093856173856"
  }
}
```

### **Delete Pasien By NIK (Admin)**
Request
```
DELETE : https://final-project-be21-production.up.railway.app/dokter/pasien/200510285
```

Masukkan Authorization dari login admin
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2Y2IzYTRkMzQ5YWEzOGE1MGNlYTAiLCJpYXQiOjE2Njk3Nzg3NzV9.W58Xafa9ScwTFRMHEKwNNiOpHCkQ7swHmX9TL01JaFs
```

Response
```json
{
  "message": "Data Deleted"
}
```

### **Update Pasien By NIK (Admin)**
Request
```
PUT : https://final-project-be21-production.up.railway.app/dokter/pasien/200510285
```

Masukkan Authorization dari login admin
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2Y2IzYTRkMzQ5YWEzOGE1MGNlYTAiLCJpYXQiOjE2Njk3Nzg3NzV9.W58Xafa9ScwTFRMHEKwNNiOpHCkQ7swHmX9TL01JaFs
```

Body
```json
{
    "nik": "2005101085",
    "nama": "anjis ilham",
    "tglLahir": "2002-01-02",
    "umur": "20",
    "jk": "laki-laki",
    "alamat": "Ngawi",
    "noHp": "098173657235"
}
```
Response
```json
{
  "message": "Succes updated user!",
  "data": {
    "_id": "6386db1f8a9c1d49a1ef2707",
    "nik": "2005101085",
    "nama": "anjis ilham",
    "tglLahir": "2002-01-02T00:00:00.000Z",
    "umur": "20",
    "jk": "laki-laki",
    "alamat": "Ngawi",
    "noHp": "098173657235"
  }
}
```

## **CRUD Input Data Dokter**

### **Add Dokter (Admin)**
Request
```
POST : https://final-project-be21-production.up.railway.app/dokter/addDokter
```

Masukkan Authorization dari login admin
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2Y2IzYTRkMzQ5YWEzOGE1MGNlYTAiLCJpYXQiOjE2Njk3Nzg3NzV9.W58Xafa9ScwTFRMHEKwNNiOpHCkQ7swHmX9TL01JaFs
```

Body 
```json
{
  "nip": "19876532",
  "nama": "dr. Susilowati",
  "spesialis": "jantung",
  "alamat": "caruban",
  "jk": "perempuan",
  "noHp": "097163416345"
}
```
Response
```json
{
  "message": "successfully add data"
}
```

### **Get All Dokter (Admin)**
Request
```
GET : https://final-project-be21-production.up.railway.app/dokter/allDokter
```

Masukkan Authorization dari login admin
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2Y2IzYTRkMzQ5YWEzOGE1MGNlYTAiLCJpYXQiOjE2Njk3Nzg3NzV9.W58Xafa9ScwTFRMHEKwNNiOpHCkQ7swHmX9TL01JaFs
```

Response
```json
{
  "message": "success get data",
  "data": [
    {
      "_id": "6386e04a8a9c1d49a1ef272e",
      "nip": "19876532",
      "nama": "dr. Susilowati",
      "spesialis": "jantung",
      "alamat": "caruban",
      "jk": "perempuan",
      "noHp": "097163416345",
      "__v": 0
    },
    {
      "_id": "6386e10bfd01bfa87abd2000",
      "nip": "27465829345",
      "nama": "dr. Alfan",
      "spesialis": "Bedah",
      "alamat": "Ponorogo",
      "jk": "laki-laki",
      "noHp": "07354719346",
      "__v": 0
    }
  ]
}
```

### **Get Dokter By NIP (Admin)**
Request
```
GET : https://final-project-be21-production.up.railway.app/dokter/27465829345
```

Masukkan Authorization dari login admin
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2Y2IzYTRkMzQ5YWEzOGE1MGNlYTAiLCJpYXQiOjE2Njk3Nzg3NzV9.W58Xafa9ScwTFRMHEKwNNiOpHCkQ7swHmX9TL01JaFs
```

Response
```json
{
  "message": "managed to get data",
  "data": {
    "_id": "6386e10bfd01bfa87abd2000",
    "nip": "27465829345",
    "nama": "dr. Alfan",
    "spesialis": "Bedah",
    "alamat": "Ponorogo",
    "jk": "laki-laki",
    "noHp": "07354719346",
    "__v": 0
  }
}
```

### **Delete Dokter By NIP (Admin)**
Request
```
DELETE : https://final-project-be21-production.up.railway.app/dokter/27465829345
```

Masukkan Authorization dari login admin
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2Y2IzYTRkMzQ5YWEzOGE1MGNlYTAiLCJpYXQiOjE2Njk3Nzg3NzV9.W58Xafa9ScwTFRMHEKwNNiOpHCkQ7swHmX9TL01JaFs
```

Response
```json
{
  "message": "successfully deleted data"
}
```

### **Update Dokter By NIP (Admin)**
Request
```
PUT : https://final-project-be21-production.up.railway.app/dokter/27465829345
```

Masukkan Authorization dari login admin
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2Y2IzYTRkMzQ5YWEzOGE1MGNlYTAiLCJpYXQiOjE2Njk3Nzg3NzV9.W58Xafa9ScwTFRMHEKwNNiOpHCkQ7swHmX9TL01JaFs
```

Body
```json
{
"nip": "19876532",
"nama": "dr. Susilowati Anggraini",
"spesialis" :"jantung",
"alamat": "caruban",
"jk":"perempuan",
"noHp": "097163416345"
}
```
Response
```json
{
  "message": "successfully updated data",
  "data": {
    "_id": "6386e04a8a9c1d49a1ef272e",
    "nip": "19876532",
    "nama": "dr. Susilowati Anggraini",
    "spesialis": "jantung",
    "alamat": "caruban",
    "jk": "perempuan",
    "noHp": "097163416345",
    "__v": 0
  }
}
```

## **CRUD Input Data Rekam Medis**

### **Add Rekam Medis (Admin)**
Request
```
POST : https://final-project-be21-production.up.railway.app/rekmed/add
```

Masukkan Authorization dari login admin
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2Y2IzYTRkMzQ5YWEzOGE1MGNlYTAiLCJpYXQiOjE2Njk3Nzg3NzV9.W58Xafa9ScwTFRMHEKwNNiOpHCkQ7swHmX9TL01JaFs
```

Body 
```json
{
  "noRm": "09816234",
  "pasien": "6386dc388a9c1d49a1ef2712",
  "nik": "20486935",
  "dokter": "6386e04a8a9c1d49a1ef272e",
  "keluhan": "sakit kepala",
  "diagnosis": "migrain",
  "info_pengobatan": "obat acetaminophen dan aspirin",
  "tanggal_periksa": "2022-11-25"
}
```
Response
```json
{
  "message": "data has been created!"
}
```

### **Get All Rekam Medis (Admin)**
Request
```
GET : https://final-project-be21-production.up.railway.app/rekmed/allRekmed
```

Masukkan Authorization dari login admin
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2Y2IzYTRkMzQ5YWEzOGE1MGNlYTAiLCJpYXQiOjE2Njk3Nzg3NzV9.W58Xafa9ScwTFRMHEKwNNiOpHCkQ7swHmX9TL01JaFs
```

Response
```json
{
  "message": "Getting Data",
  "data": [
    {
      "_id": "6386e3e5fd01bfa87abd2011",
      "noRm": "09816234",
      "pasien": {
        "_id": "6386dc388a9c1d49a1ef2712",
        "nama": "kiki"
      },
      "nik": "20486935",
      "dokter": {
        "_id": "6386e04a8a9c1d49a1ef272e",
        "nama": "dr. Susilowati Anggraini"
      },
      "keluhan": "sakit kepala",
      "diagnosis": "migrain",
      "info_pengobatan": "obat acetaminophen dan aspirin",
      "tanggal_periksa": "2022-11-25T00:00:00.000Z"
    },
    {
      "_id": "6386e49bfd01bfa87abd2015",
      "noRm": "09816234",
      "pasien": {
        "_id": "6386db1f8a9c1d49a1ef2707",
        "nama": "anjis ilham"
      },
      "nik": "2005101085",
      "dokter": {
        "_id": "6386e04a8a9c1d49a1ef272e",
        "nama": "dr. Susilowati Anggraini"
      },
      "keluhan": "panas",
      "diagnosis": "demam",
      "info_pengobatan": "obat paracetamol",
      "tanggal_periksa": "2022-10-16T00:00:00.000Z"
    }
  ]
}
```

### **Get Rekam Medis By NIK (Admin)**
Request
```
GET : https://final-project-be21-production.up.railway.app/rekmed/20486935
```

Masukkan Authorization dari login admin
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2Y2IzYTRkMzQ5YWEzOGE1MGNlYTAiLCJpYXQiOjE2Njk3Nzg3NzV9.W58Xafa9ScwTFRMHEKwNNiOpHCkQ7swHmX9TL01JaFs
```

Response
```json
{
  "message": "You Searched for",
  "data": {
    "_id": "6386e3e5fd01bfa87abd2011",
    "noRm": "09816234",
    "pasien": {
      "_id": "6386dc388a9c1d49a1ef2712",
      "nama": "kiki"
    },
    "nik": "20486935",
    "dokter": {
      "_id": "6386e04a8a9c1d49a1ef272e",
      "nama": "dr. Susilowati Anggraini"
    },
    "keluhan": "sakit kepala",
    "diagnosis": "migrain",
    "info_pengobatan": "obat acetaminophen dan aspirin",
    "tanggal_periksa": "2022-11-25T00:00:00.000Z"
  }
}
```

### **Delete Rekam Medis By NIK (Admin)**
Request
```
DELETE : https://final-project-be21-production.up.railway.app/rekmed/20486935
```

Masukkan Authorization dari login admin
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2Y2IzYTRkMzQ5YWEzOGE1MGNlYTAiLCJpYXQiOjE2Njk3Nzg3NzV9.W58Xafa9ScwTFRMHEKwNNiOpHCkQ7swHmX9TL01JaFs
```

Response
```json
{
  "message": "Succes deleted data"
}
```

### **Update Rekam Medis By NIK (Admin)**
Request
```
PUT : https://final-project-be21-production.up.railway.app/rekmed/2005101085
```

Masukkan Authorization dari login admin
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2Y2IzYTRkMzQ5YWEzOGE1MGNlYTAiLCJpYXQiOjE2Njk3Nzg3NzV9.W58Xafa9ScwTFRMHEKwNNiOpHCkQ7swHmX9TL01JaFs
```

Body
```json
{
  "noRm" : "09816234",
  "pasien" : "6386db1f8a9c1d49a1ef2707",
  "nik" : "2005101085",
  "dokter" : "6386e04a8a9c1d49a1ef272e",
  "keluhan" : "panas, batuk, pilek",
  "diagnosis" : "demam, flu",
  "info_pengobatan" : "obat paracetamol, Antihistamin",
  "tanggal_periksa" : "2022-10-16"
}
```
Response
```json
{
  "message": "Todo updated",
  "data": {
    "_id": "6386e49bfd01bfa87abd2015",
    "noRm": "09816234",
    "pasien": "6386db1f8a9c1d49a1ef2707",
    "nik": "2005101085",
    "dokter": "6386e04a8a9c1d49a1ef272e",
    "keluhan": "panas, batuk, pilek",
    "diagnosis": "demam, flu",
    "info_pengobatan": "obat paracetamol, Antihistamin",
    "tanggal_periksa": "2022-10-16T00:00:00.000Z"
  }
}
```

## **Fitur Pasien (User)**

### **Get Rekam Medis By NIK (User)**
Request
```
GET : https://final-project-be21-production.up.railway.app/pasien/rekmed/2005101085
```

Masukkan Authorization dari login user
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2ZDFlZDRkMzQ5YWEzOGE1MGNlYjIiLCJpYXQiOjE2Njk3ODU1MDl9.SNYYUlS2WCxaSbmYwCWKyoXlvLmdpsmhC027CphDyL4
```

Response
```json
{
  "message": "You Searched for",
  "data": [
    {
      "_id": "6386e49bfd01bfa87abd2015",
      "noRm": "09816234",
      "pasien": {
        "_id": "6386db1f8a9c1d49a1ef2707",
        "nama": "anjis ilham"
      },
      "nik": "2005101085",
      "dokter": {
        "_id": "6386e04a8a9c1d49a1ef272e",
        "nama": "dr. Susilowati Anggraini"
      },
      "keluhan": "panas, batuk, pilek",
      "diagnosis": "demam, flu",
      "info_pengobatan": "obat paracetamol, Antihistamin",
      "tanggal_periksa": "2022-10-16T00:00:00.000Z",
      "__v": 0
    }
  ]
}
```

### **Get Data Pasien By NIK (User)**
Request
```
GET : https://final-project-be21-production.up.railway.app/pasien/2005101085
```

Masukkan Authorization dari login user
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2ZDFlZDRkMzQ5YWEzOGE1MGNlYjIiLCJpYXQiOjE2Njk3ODU1MDl9.SNYYUlS2WCxaSbmYwCWKyoXlvLmdpsmhC027CphDyL4
```

Response
```json
{
  "message": "You Searched for",
  "data": {
    "_id": "6386db1f8a9c1d49a1ef2707",
    "nik": "2005101085",
    "nama": "anjis ilham",
    "tglLahir": "2002-01-02T00:00:00.000Z",
    "umur": "20",
    "jk": "laki-laki",
    "alamat": "Ngawi",
    "noHp": "098173657235"
  }
}
```
