import React from 'react';
import './App.css';
import FundingInfoSections from './components/fundinginfosections/fundinginfosections';
import FundingInfoSection from './components/fundinginfosection/fundinginfosection';
import YearSelector from './components/yearselector/yearselector';
import FundingInfoContent from './components/fundinginfocontent/fundinginfocontent';

function App() {
  return (
    <div className="app">
      <YearSelector />
      <FundingInfoSections>
        <FundingInfoSection title="Total Funding">
          <FundingInfoContent 
              display="summary"
              url="https://maps.foundationcenter.org/api/hip/getFundingSummary.php"
          />
        </FundingInfoSection>
        <FundingInfoSection title="Top Funding">
          <FundingInfoContent 
              display="list"
              id="top-funding"
              url="https://maps.foundationcenter.org/api/hip/getTopFunders.php"
          />
        </FundingInfoSection>
        <FundingInfoSection title="Top Recipients">
          <FundingInfoContent 
              display="list"
              id="top-recipients"
              url="https://maps.foundationcenter.org/api/hip/getTopRecipients.php"
            />
        </FundingInfoSection>
      </FundingInfoSections>
    </div>
  )
}

export default App;