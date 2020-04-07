const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers.filter(employer => employer).map((item) => item.toLowerCase().trim());



let sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash, eu, rus} = sponsors;

const sumSponsors = [...eu, ...rus, 'unexpected sponsor']

const calcCash = (cash = 0) => cash.reduce((a,b) => a + b);

const money = calcCash(cash);

const makeBusiness = ({owner, director = 'Victor', cash, emp}) => {
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}
    And we have a sponsors: ${sponsors}
    Note. Be careful with ${eu[0]}. It's a huge risk.`);
}
makeBusiness({cash: money, emp: employersNames});
