// config.js
const { PrismaClient } = require('@prisma/client');
const db = new PrismaClient();

module.exports = db;


