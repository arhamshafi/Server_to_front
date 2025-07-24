const express = require('express');
const cors = require("cors")
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors())
// Middleware
app.use(express.json());

// Company data objects
const companies = {
  apple: {
    name: "Apple Inc.",
    founded: 1976,
    headquarters: "Cupertino, California",
    ceo: "Tim Cook",
    industry: "Technology",
    employees: 164000,
    revenue: "394.3 billion USD",
    marketCap: "2.8 trillion USD"
  },
  
  google: {
    name: "Alphabet Inc. (Google)",
    founded: 1998,
    headquarters: "Mountain View, California",
    ceo: "Sundar Pichai",
    industry: "Technology",
    employees: 174014,
    revenue: "307.4 billion USD",
    marketCap: "1.7 trillion USD"
  },
  
  microsoft: {
    name: "Microsoft Corporation",
    founded: 1975,
    headquarters: "Redmond, Washington",
    ceo: "Satya Nadella",
    industry: "Technology",
    employees: 221000,
    revenue: "211.9 billion USD",
    marketCap: "2.8 trillion USD"
  },
  
  amazon: {
    name: "Amazon.com Inc.",
    founded: 1994,
    headquarters: "Seattle, Washington",
    ceo: "Andy Jassy",
    industry: "E-commerce & Cloud Computing",
    employees: 1541000,
    revenue: "574.8 billion USD",
    marketCap: "1.5 trillion USD"
  },
  
  meta: {
    name: "Meta Platforms Inc.",
    founded: 2004,
    headquarters: "Menlo Park, California",
    ceo: "Mark Zuckerberg",
    industry: "Social Media & Technology",
    employees: 67317,
    revenue: "134.9 billion USD",
    marketCap: "800 billion USD"
  },
  
  tesla: {
    name: "Tesla Inc.",
    founded: 2003,
    headquarters: "Austin, Texas",
    ceo: "Elon Musk",
    industry: "Electric Vehicles & Clean Energy",
    employees: 140473,
    revenue: "96.8 billion USD",
    marketCap: "800 billion USD"
  },
  
  netflix: {
    name: "Netflix Inc.",
    founded: 1997,
    headquarters: "Los Gatos, California",
    ceo: "Ted Sarandos",
    industry: "Entertainment & Streaming",
    employees: 12800,
    revenue: "31.6 billion USD",
    marketCap: "200 billion USD"
  },
  
  walmart: {
    name: "Walmart Inc.",
    founded: 1962,
    headquarters: "Bentonville, Arkansas",
    ceo: "Doug McMillon",
    industry: "Retail",
    employees: 2100000,
    revenue: "611.3 billion USD",
    marketCap: "500 billion USD"
  },
  
  jpmorgan: {
    name: "JPMorgan Chase & Co.",
    founded: 1799,
    headquarters: "New York City, New York",
    ceo: "Jamie Dimon",
    industry: "Financial Services",
    employees: 293723,
    revenue: "162.9 billion USD",
    marketCap: "600 billion USD"
  },
  
  coca_cola: {
    name: "The Coca-Cola Company",
    founded: 1892,
    headquarters: "Atlanta, Georgia",
    ceo: "James Quincey",
    industry: "Beverages",
    employees: 82500,
    revenue: "45.7 billion USD",
    marketCap: "250 billion USD"
  }
};

app.get("/company" , ( req , res )=>{
    res.json({ success : true , name : companies })
})

// API Routes with destructured data

// 1. Apple API
app.get('/api/apple', (req, res) => {
  const { name, founded, headquarters, ceo, industry, employees, revenue, marketCap } = companies.apple;
  res.json({
    success: true,
    data: {
      companyName: name,
      yearFounded: founded,
      location: headquarters,
      chiefExecutive: ceo,
      businessSector: industry,
      workforce: employees,
      annualRevenue: revenue,
      marketValue: marketCap
    }
  });
});

// 2. Google API
app.get('/api/google', (req, res) => {
  const { name, founded, headquarters, ceo, industry, employees, revenue, marketCap } = companies.google;
  res.json({
    success: true,
    data: {
      corporateName: name,
      establishedYear: founded,
      mainOffice: headquarters,
      topExecutive: ceo,
      industryType: industry,
      totalEmployees: employees,
      yearlyRevenue: revenue,
      stockValue: marketCap
    }
  });
});

// 3. Microsoft API
app.get('/api/microsoft', (req, res) => {
  const { name, founded, headquarters, ceo, industry, employees, revenue, marketCap } = companies.microsoft;
  res.json({
    success: true,
    data: {
      organizationName: name,
      foundingYear: founded,
      corporateHQ: headquarters,
      ceoName: ceo,
      sector: industry,
      staffCount: employees,
      totalRevenue: revenue,
      marketCapitalization: marketCap
    }
  });
});

// 4. Amazon API
app.get('/api/amazon', (req, res) => {
  const { name, founded, headquarters, ceo, industry, employees, revenue, marketCap } = companies.amazon;
  res.json({
    success: true,
    data: {
      businessName: name,
      startYear: founded,
      headOffice: headquarters,
      executiveLeader: ceo,
      businessArea: industry,
      personnel: employees,
      incomeGenerated: revenue,
      companyValue: marketCap
    }
  });
});

// 5. Meta API
app.get('/api/meta', (req, res) => {
  const { name, founded, headquarters, ceo, industry, employees, revenue, marketCap } = companies.meta;
  res.json({
    success: true,
    data: {
      companyTitle: name,
      creationYear: founded,
      primaryLocation: headquarters,
      leadExecutive: ceo,
      operationSector: industry,
      teamSize: employees,
      financialIncome: revenue,
      marketWorth: marketCap
    }
  });
});

// 6. Tesla API
app.get('/api/tesla', (req, res) => {
  const { name, founded, headquarters, ceo, industry, employees, revenue, marketCap } = companies.tesla;
  res.json({
    success: true,
    data: {
      firmName: name,
      launchYear: founded,
      baseLocation: headquarters,
      chiefOfficer: ceo,
      industryFocus: industry,
      workerCount: employees,
      salesRevenue: revenue,
      publicValue: marketCap
    }
  });
});

// 7. Netflix API
app.get('/api/netflix', (req, res) => {
  const { name, founded, headquarters, ceo, industry, employees, revenue, marketCap } = companies.netflix;
  res.json({
    success: true,
    data: {
      entityName: name,
      originYear: founded,
      centralOffice: headquarters,
      executiveHead: ceo,
      serviceArea: industry,
      employeeBase: employees,
      operatingRevenue: revenue,
      investmentValue: marketCap
    }
  });
});

// 8. Walmart API
app.get('/api/walmart', (req, res) => {
  const { name, founded, headquarters, ceo, industry, employees, revenue, marketCap } = companies.walmart;
  res.json({
    success: true,
    data: {
      retailerName: name,
      establishmentYear: founded,
      homeOffice: headquarters,
      president: ceo,
      commerceType: industry,
      workforce: employees,
      grossRevenue: revenue,
      equityValue: marketCap
    }
  });
});

// 9. JPMorgan API
app.get('/api/jpmorgan', (req, res) => {
  const { name, founded, headquarters, ceo, industry, employees, revenue, marketCap } = companies.jpmorgan;
  res.json({
    success: true,
    data: {
      bankName: name,
      foundedDate: founded,
      mainBranch: headquarters,
      chairmanCEO: ceo,
      financialSector: industry,
      bankEmployees: employees,
      netRevenue: revenue,
      institutionValue: marketCap
    }
  });
});

// 10. Coca-Cola API
app.get('/api/coca_cola', (req, res) => {
  const { name, founded, headquarters, ceo, industry, employees, revenue, marketCap } = companies.coca_cola;
  res.json({
    success: true,
    data: {
      brandName: name,
      incorporationYear: founded,
      globalHQ: headquarters,
      companyLeader: ceo,
      productCategory: industry,
      globalStaff: employees,
      brandRevenue: revenue,
      brandValue: marketCap
    }
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: "Company Data API Server",
    version: "1.0.0",
    endpoints: [
      "/api/apple",
      "/api/google", 
      "/api/microsoft",
      "/api/amazon",
      "/api/meta",
      "/api/tesla",
      "/api/netflix",
      "/api/walmart",
      "/api/jpmorgan",
      "/api/coca_cola"
    ]
  });
});

// 404 handler
// app.use('*', (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: "API endpoint not found"
//   });
// });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Internal server error"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to see available endpoints`);
});

module.exports = app;