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
  currencies: 'Pound',
  locale: 'en-GB',
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
  currencies: 'Pound',
  locale: 'en-GB',
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
  currencies: 'Pound',
  locale: 'en-GB',
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
  currencies: 'Pound',
  locale: 'en-GB',
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
  currencies: 'Pound',
  locale: 'en-GB',
};

const accounts = [account1, account2, account3, account4, account5];

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

labelDate.textContent = new Intl.DateTimeFormat('en-GB', options).format(now);
//Event handler
let currentAccount;
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

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDate[i]);
    const displayDate = formatMovements(date, currentAccount.locale);

    const htmlRow = `<div class="movements__row">
                       <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">&pound${mov.toFixed(2)}</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', htmlRow);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `£${acc.balance.toFixed(2)}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `£${incomes.toFixed(2)}`;

  const outcome = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `£${outcome.toFixed(2)}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposits => (deposits * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, mov) => acc + mov, 0);

  labelSumInterest.textContent = `£${interest.toFixed(2)}`;
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

    console.log('Transfer valid');
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    currentAccount.movementsDate.push(new Date().toISOString());
    updateUI(currentAccount);
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
