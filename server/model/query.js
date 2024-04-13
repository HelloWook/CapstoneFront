const connection = require("../config/mysql");

// test
const getUsers = () => {
  return new Promise((res, rej) => {
    connection.query("SELECT * FROM users", (error, results) => {
      if (error) {
        rej(error);
      } else {
        res(results);
      }
    });
  });
};

const LoginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          if (results.length === 0) {
            reject("존재하지 않는 이용자입니다.");
          } else {
            const user = results[0];
            resolve(user);
          }
        }
      }
    );
  });
};

const JoinUser = (email, password, nickname) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO users (email, password, nickname, joindate) VALUES (?, ?, ?, NOW())",
      [email, password, nickname],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });
};

const UploadFlower = (name, kind, temperature, humidity, image_url, email) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO flower (name, kind, temperature, humidity, joindate, image_url, email) VALUES (?, ?, ?, ?, NOW(), ?, ?)",
      [name, kind, temperature, humidity, image_url, email],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });
};

const GetFlower = async (email) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM flower WHERE email = ?",
      [email],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });
};

const UpdateFlower = async (flower_id, temperature, humidity) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE flower SET temperature = ?, humidity = ? WHERE flower_id = ?",
      [temperature, humidity, flower_id],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });
};

module.exports = {
  getUsers,
  JoinUser,
  UploadFlower,
  UpdateFlower,
  LoginUser,
  GetFlower,
};
