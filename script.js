// Data
const account1 = {
  owner: 'Marius Iordan',
  movements: [200.77, 450.89, -400, 3000.45, -650.98, -130, 78.56, 1300.34],
  movementsDate: [
    '2019-12-25T06:04:23.907Z',
    '2019-07-25T06:04:23.907Z',
    '2019-11-25T06:04:23.907Z',
    '2019-06-25T06:04:23.907Z',
    '2024-07-12T06:04:23.907Z',
    '2024-07-13T06:04:23.907Z',
    '2024-07-14T06:04:23.907Z',
    '2024-07-15T06:04:23.907Z',
  ],
  interestRate: 1.2, // %
  pin: 1111,
  currency: 'GBP',
  locale: 'en-UK',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  movementsDate: [
    '2019-12-25T06:04:23.907Z',
    '2019-07-25T06:04:23.907Z',
    '2019-11-25T06:04:23.907Z',
    '2019-06-25T06:04:23.907Z',
    '2024-07-12T06:04:23.907Z',
    '2024-07-13T06:04:23.907Z',
    '2024-07-14T06:04:23.907Z',
    '2024-07-15T06:04:23.907Z',
  ],
  interestRate: 1.5,
  pin: 2222,
  currency: 'EUR',
  locale: 'pt-PT',
};

const account3 = {
  owner: 'Marius Panait',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  movementsDate: [
    '2019-11-25T06:04:23.907Z',
    '2019-06-25T06:04:23.907Z',
    '2024-07-12T06:04:23.907Z',
    '2024-07-13T06:04:23.907Z',
    '2024-07-14T06:04:23.907Z',
    '2024-07-15T06:04:23.907Z',
    '2024-07-15T06:04:23.907Z',
    '2024-07-15T06:04:23.907Z',
  ],
  interestRate: 0.7,
  pin: 3333,
  currency: 'GBP',
  locale: 'en-UK',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  movementsDate: [
    '2024-07-13T06:04:23.907Z',
    '2024-07-14T06:04:23.907Z',
    '2024-07-15T06:04:23.907Z',
    '2024-07-15T06:04:23.907Z',
    '2024-07-15T06:04:23.907Z',
  ],
  interestRate: 1,
  pin: 4444,
  currency: 'GBP',
  locale: 'en-UK',
};
const account5 = {
  owner: 'Albert Iordan',
  movements: [430, 1000, 700, 50, 90, 5000, 400, 700, 1000, 100000],
  movementsDate: [
    '2019-12-25T06:04:23.907Z',
    '2019-07-25T06:04:23.907Z',
    '2019-11-25T06:04:23.907Z',
    '2019-06-25T06:04:23.907Z',
    '2024-07-12T06:04:23.907Z',
    '2024-07-13T06:04:23.907Z',
    '2024-07-14T06:04:23.907Z',
    '2024-07-15T06:04:23.907Z',
    '2024-07-15T06:04:23.907Z',
    '2024-07-15T06:04:23.907Z',
  ],
  interestRate: 0.5,
  pin: 5555,
  currency: 'USD',
  locale: 'en-US',
};
const account6 = {
  owner: 'Silver The Cat',
  movements: [5000.67, 3400, -150, -790, -3210, -1000, 8500, -30],
  movementsDate: [
    '2019-12-25T06:04:23.907Z',
    '2019-07-25T06:04:23.907Z',
    '2019-11-25T06:04:23.907Z',
    '2019-06-25T06:04:23.907Z',
    '2024-07-12T06:04:23.907Z',
    '2024-07-13T06:04:23.907Z',
    '2024-07-14T06:04:23.907Z',
    '2024-07-15T06:04:23.907Z',
    '2024-07-15T06:04:23.907Z',
  ],
  interestRate: 1.5,
  pin: 6666,
  currency: 'SYP',
  locale: 'ar-SY',
};
const account7 = {
  owner: 'Salahe Lakdar',
  movements: [5000.67, 3400, -150, -790, -3210, -1000, 8500, -30],
  movementsDate: [
    '2019-12-25T06:04:23.907Z',
    '2019-07-25T06:04:23.907Z',
    '2019-11-25T06:04:23.907Z',
    '2019-06-25T06:04:23.907Z',
    '2024-07-12T06:04:23.907Z',
    '2024-07-13T06:04:23.907Z',
    '2024-07-14T06:04:23.907Z',
    '2024-07-15T06:04:23.907Z',
    '2024-07-15T06:04:23.907Z',
  ],
  interestRate: 1.5,
  pin: 7777,
  currency: 'MAD',
  locale: 'ar-MA',
};

const accounts = [
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
  account7,
];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');
const btnLogout = document.querySelector('.btn-logout');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//! /////////////////////////////////////////////////////////////////////////////////////////
//* Functions

// Experimenting API

const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
};
const locale = navigator.language;
console.log(locale);

labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);
//Event handler
let currentAccount, timer;
const formatMovements = function (date, locale) {
  const calcDayPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const dayPassed = calcDayPassed(new Date(), date);
  console.log(dayPassed);

  if (dayPassed === 0) return 'Today';
  if (dayPassed === 1) return 'Yesterday';
  if (dayPassed <= 7) return `${dayPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDate[i]);
    const displayDate = formatMovements(date, currentAccount.locale);

    const formatMovement = formatCur(mov, acc.locale, acc.currency);

    const htmlRow = `<div class="movements__row">
                       <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${formatMovement}</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', htmlRow);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const outcome = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(
    Math.abs(outcome),
    acc.locale,
    acc.currency
  );

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposits => (deposits * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, mov) => acc + mov, 0);

  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

const updateUI = function (acc) {
  //! Display the movements
  displayMovements(acc);
  //! Display balance
  calcDisplayBalance(acc);
  //! Display summary
  calcDisplaySummary(acc);
};

//set a countdown timer
const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = time % 60;
    //in each call print the remaining time in to UI
    labelTimer.textContent = `${min}:${sec}`;

    //When 0 sec, stop the timer and log out the user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }
    //decrese 1 sec
    time--;
  };
  // set time to 3 min
  let time = 120;
  tick();
  //call the timer every sec
  const timer = setInterval(tick, 1000);
  return timer;
};

// let currentDate = new Date()
btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value.toLowerCase()
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    //! Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    } ${currentAccount.owner.split(' ')[1]}!`;
    containerApp.style.opacity = 100;

    //! Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    //? update UI
    updateUI(currentAccount);
    document.body.style.backgroundColor = 'lightblue';
    const date = new Date();
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    document.querySelector(
      '.date'
    ).innerHTML = `${day}/${month}/${year}, ${hour}:${minutes}`;
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //?  Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //? Add transfer date
    currentAccount.movementsDate.push(new Date().toISOString());
    receiverAcc.movementsDate.push(new Date().toISOString());

    //? update UI
    updateUI(currentAccount);
    inputTransferAmount.blur();
    inputTransferTo.blur();

    //reset timer
    clearInterval(timer);
    timer = startLogOutTimer();

    console.log('Transfer valid');
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      //add movement
      currentAccount.movements.push(amount);
      //add loan date
      currentAccount.movementsDate.push(new Date().toISOString());
      //update UI
      updateUI(currentAccount);
      //reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 3000);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started!';
    inputCloseUsername.value = inputClosePin.value = '';
  }
  console.log(accounts.findIndex(acc => acc === index));
  console.log('deleted account!');
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

btnLogout.addEventListener('click', function (e) {
  e.preventDefault();
  clearInterval(timer);
  labelWelcome.textContent = `Log in to get started`;
  containerApp.style.opacity = 0;
});

const addUsers = function (firstName, lastName, pin, movements, currency) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.pin = pin;
  this.movements = movements;
  this .movementsDate = new Date()
  this.currency = currency;
  this.locale = navigator.language;
  
  return firstName, lastName, pin, movements, currency;
  //owner: return this.firstName + ' ' + this.lastName;
};

function submitForm() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const password = document.getElementById('password').value;
  const deposit = document.getElementById('deposit').value;
  const currency = document.getElementById('currency').value;

  if (!firstName || !lastName || !password || !deposit || !currency) {
    alert('Please fill in all fields.\nMinimum deposit is 1.');
    return;
  }

  const userDetails = {
    firstName,
    lastName,
    password,
    deposit,
    currency,
  };

  console.log('User Details:', userDetails);
  alert('Form submitted successfully!');

  const form = document.querySelector('#bankingForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newUser = new addUsers(firstName, lastName, password, deposit, currency)
    accounts.push(newUser);
    console.log(newUser);
    document.querySelector('form').reset();
    for (item of accounts){
      console.log(item);
    
    }
  });
}

