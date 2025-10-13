'use client'

import Footer from '../components/Footer'

const sizeChart = [
  { us: '3', uk: 'F', eu: '44', diameter: '14.1', circumference: '44.2', swiss: 'C', french: '2', german: '41 1/2', japanese: '1', italian: '1 1/2' },
  { us: '3.5', uk: 'G½', eu: '45', diameter: '14.5', circumference: '45.5', swiss: 'D 1/2', french: '2 1/4', german: '', japanese: '2', italian: '2' },
  { us: '4', uk: 'H½', eu: '46', diameter: '14.9', circumference: '46.8', swiss: 'E', french: '2 1/2', german: '42 3/4', japanese: '3', italian: '2 3/4' },
  { us: '4.5', uk: 'I½', eu: '47', diameter: '15.3', circumference: '48.0', swiss: 'E 1/2', french: '2 3/4', german: '', japanese: '', italian: '' },
  { us: '5', uk: 'J½', eu: '49', diameter: '15.7', circumference: '49.3', swiss: 'F', french: '3', german: '44', japanese: '4', italian: '4' },
  { us: '5.5', uk: 'K½', eu: '50', diameter: '16.1', circumference: '50.6', swiss: 'F 1/2', french: '3 1/8', german: '', japanese: '', italian: '' },
  { us: '6', uk: 'L½', eu: '51', diameter: '16.5', circumference: '51.9', swiss: 'F 3/4', french: '3 1/4', german: '45 1/2', japanese: '5', italian: '5 1/4' },
  { us: '6.5', uk: 'M½', eu: '53', diameter: '16.9', circumference: '53.1', swiss: 'G', french: '3 5/8', german: '', japanese: '', italian: '' },
  { us: '7', uk: 'N½', eu: '54', diameter: '17.3', circumference: '54.4', swiss: 'G 1/4', french: '3 1/2', german: '', japanese: '6', italian: '6 1/2' },
  { us: '7.5', uk: 'O½', eu: '55', diameter: '17.7', circumference: '55.7', swiss: 'H', french: '3 3/4', german: '46 1/2', japanese: '', italian: '' },
  { us: '8', uk: 'P½', eu: '57', diameter: '18.1', circumference: '57.0', swiss: 'H 1/2', french: '4', german: '', japanese: '7', italian: '7 1/4' },
  { us: '8.5', uk: 'Q½', eu: '58', diameter: '18.5', circumference: '58.3', swiss: 'I', french: '4 1/4', german: '47 3/4', japanese: '', italian: '' },
  { us: '9', uk: 'R½', eu: '59', diameter: '18.9', circumference: '59.5', swiss: 'I 1/2', french: '4 1/2', german: '', japanese: '8', italian: '7 3/4' },
  { us: '9.5', uk: 'S½', eu: '61', diameter: '19.4', circumference: '60.8', swiss: 'J', french: '4 5/8', german: '49', japanese: '', italian: '' },
  { us: '10', uk: 'T½', eu: '62', diameter: '19.8', circumference: '62.1', swiss: 'J 1/4', french: '4 3/4', german: '', japanese: '9', italian: '9' },
  { us: '10.5', uk: 'U½', eu: '63', diameter: '20.2', circumference: '63.4', swiss: 'J 1/2', french: '5', german: '', japanese: '', italian: '' },
  { us: '11', uk: 'V½', eu: '65', diameter: '20.6', circumference: '64.6', swiss: 'K', french: '5 1/8', german: '50', japanese: '', italian: '10' },
  { us: '11.5', uk: 'W½', eu: '66', diameter: '21.0', circumference: '65.9', swiss: 'K 1/4', french: '5 1/4', german: '', japanese: '', italian: '' },
  { us: '12', uk: 'X½', eu: '67', diameter: '21.4', circumference: '67.2', swiss: 'K 1/2', french: '5 3/8', german: '', japanese: '10', italian: '11 3/4' },
  { us: '12.5', uk: 'Y½', eu: '69', diameter: '21.8', circumference: '68.5', swiss: 'L', french: '5 1/2', german: '51 3/4', japanese: '', italian: '' },
  { us: '13', uk: 'Z½', eu: '70', diameter: '22.2', circumference: '69.7', swiss: 'L 1/4', french: '5 3/4', german: '', japanese: '11', italian: '12 3/4' },
  { us: '13.5', uk: 'Z1½', eu: '71', diameter: '22.6', circumference: '71.0', swiss: 'L 1/2', french: '6', german: '52 3/4', japanese: '', italian: '' },
  { us: '14', uk: '', eu: '73', diameter: '23.0', circumference: '72.3', swiss: 'M', french: '6 1/4', german: '', japanese: '12', italian: '14' },
  { us: '14.5', uk: '', eu: '74', diameter: '23.4', circumference: '73.5', swiss: 'M 1/2', french: '6 1/2', german: '53 1/4', japanese: '', italian: '' },
  { us: '15', uk: '', eu: '75', diameter: '23.8', circumference: '74.8', swiss: 'N', french: '6 3/4', german: '', japanese: '13', italian: '15 1/4' },
  { us: '15.5', uk: '', eu: '77', diameter: '24.2', circumference: '76.1', swiss: 'N 1/2', french: '6 7/8', german: '54', japanese: '', italian: '' },
  { us: '16', uk: '', eu: '78', diameter: '24.6', circumference: '77.3', swiss: 'O', french: '7 1/4', german: '', japanese: '14', italian: '16 1/2' },
  { us: '16.5', uk: '', eu: '79', diameter: '25.0', circumference: '78.6', swiss: 'O 1/2', french: '7 1/2', german: '55 1/4', japanese: '', italian: '' },
  { us: '17', uk: '', eu: '81', diameter: '25.4', circumference: '79.9', swiss: 'P', french: '7 3/4', german: '', japanese: '15', italian: '17 3/4' },
  { us: '17.5', uk: '', eu: '82', diameter: '25.8', circumference: '81.1', swiss: 'P 1/2', french: '8', german: '56 1/2', japanese: '', italian: '' },
  { us: '18', uk: '', eu: '84', diameter: '26.2', circumference: '82.4', swiss: 'Q', french: '8 1/4', german: '', japanese: '16', italian: '18 3/4' },
  { us: '18.5', uk: '', eu: '85', diameter: '26.6', circumference: '83.7', swiss: 'Q 1/2', french: '8 1/2', german: '57 3/4', japanese: '', italian: '' },
  { us: '19', uk: '', eu: '86', diameter: '27.0', circumference: '84.9', swiss: 'R', french: '8 3/4', german: '', japanese: '17', italian: '19 3/4' },
  { us: '19.5', uk: '', eu: '88', diameter: '27.4', circumference: '86.2', swiss: 'R 1/4', french: '9', german: '58', japanese: '', italian: '' },
  { us: '20', uk: '', eu: '89', diameter: '27.8', circumference: '87.5', swiss: 'S', french: '9 1/4', german: '', japanese: '18', italian: '20 3/4' },
  { us: '20.5', uk: '', eu: '90', diameter: '28.2', circumference: '88.7', swiss: 'S 1/4', french: '9 1/2', german: '59 1/4', japanese: '', italian: '' },
  { us: '21', uk: '', eu: '92', diameter: '28.6', circumference: '90.0', swiss: 'T', french: '9 3/4', german: '', japanese: '19', italian: '21 1/2' },
  { us: '21.5', uk: '', eu: '93', diameter: '29.0', circumference: '91.3', swiss: 'T 1/2', french: '10', german: '60 1/4', japanese: '', italian: '' },
  { us: '22', uk: '', eu: '94', diameter: '29.4', circumference: '92.5', swiss: 'U', french: '10 1/4', german: '', japanese: '20', italian: '22 3/4' },
  { us: '22.5', uk: '', eu: '96', diameter: '29.8', circumference: '93.8', swiss: 'U 1/2', french: '10 1/2', german: '61 1/4', japanese: '', italian: '' },
  { us: '23', uk: '', eu: '97', diameter: '30.2', circumference: '95.1', swiss: 'V', french: '10 3/4', german: '', japanese: '21', italian: '23 3/4' },
  { us: '23.5', uk: '', eu: '98', diameter: '30.6', circumference: '96.3', swiss: 'V 1/2', french: '11', german: '62 1/4', japanese: '', italian: '' },
  { us: '24', uk: '', eu: '100', diameter: '31.0', circumference: '97.6', swiss: 'W', french: '11 1/4', german: '', japanese: '22', italian: '24 3/4' },
  { us: '24.5', uk: '', eu: '101', diameter: '31.4', circumference: '98.9', swiss: 'W 1/2', french: '11 1/2', german: '63', japanese: '', italian: '' },
  { us: '25', uk: '', eu: '102', diameter: '31.8', circumference: '100.1', swiss: 'X', french: '11 3/4', german: '', japanese: '23', italian: '25 3/4' }
]

export default function RingSizerGuide() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">HOW TO MEASURE RING SIZE?</h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choosing the correct ring size can be difficult when you are buying a ring for yourself or as a gift. 
            Here are some tips to help you find the right size:
          </p>
          <p className="text-gray-600 mt-4">
            If you can get to a jeweler, that is the most precise way to get your sizing.
          </p>
        </div>

        {/* 100 Day Guarantee */}
        <div className="bg-pink-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">100 Day Free Resizing Guarantee</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We offer a free resizing service within 100 days of purchase, ensuring that you're fully protected even if 
            your ring doesn't fit perfectly.
          </p>
          <p className="text-gray-600 mb-6">
            You can confidently complete your purchase, knowing that you're fully protected even if 
            your ring doesn't fit perfectly.
          </p>
          <button className="bg-gray-800 text-white px-8 py-3 rounded hover:bg-gray-700 transition-colors">
            LEARN MORE
          </button>
        </div>

        {/* Size Chart */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">INTERNATIONAL RING SIZE CONVERSION</h2>
          
          <div className="overflow-x-auto max-h-96 overflow-y-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-2 py-2 text-xs font-semibold text-gray-800">US Size</th>
                  <th className="border border-gray-300 px-2 py-2 text-xs font-semibold text-gray-800">UK Size</th>
                  <th className="border border-gray-300 px-2 py-2 text-xs font-semibold text-gray-800">EU Size</th>
                  <th className="border border-gray-300 px-2 py-2 text-xs font-semibold text-gray-800">Diameter</th>
                  <th className="border border-gray-300 px-2 py-2 text-xs font-semibold text-gray-800">Swiss & Austrian</th>
                  <th className="border border-gray-300 px-2 py-2 text-xs font-semibold text-gray-800">French & Russian</th>
                  <th className="border border-gray-300 px-2 py-2 text-xs font-semibold text-gray-800">German</th>
                  <th className="border border-gray-300 px-2 py-2 text-xs font-semibold text-gray-800">Japanese</th>
                  <th className="border border-gray-300 px-2 py-2 text-xs font-semibold text-gray-800">Italian</th>
                </tr>
              </thead>
              <tbody>
                {sizeChart.map((size, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-300 px-2 py-1 text-sm font-medium">{size.us}</td>
                    <td className="border border-gray-300 px-2 py-1 text-sm">{size.uk}</td>
                    <td className="border border-gray-300 px-2 py-1 text-sm">{size.eu}</td>
                    <td className="border border-gray-300 px-2 py-1 text-sm">{size.diameter}</td>
                    <td className="border border-gray-300 px-2 py-1 text-sm">{size.swiss}</td>
                    <td className="border border-gray-300 px-2 py-1 text-sm">{size.french}</td>
                    <td className="border border-gray-300 px-2 py-1 text-sm">{size.german}</td>
                    <td className="border border-gray-300 px-2 py-1 text-sm">{size.japanese}</td>
                    <td className="border border-gray-300 px-2 py-1 text-sm">{size.italian}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
      
      {/* Bracelet Sizing Guide - Full Screen */}
      <div className="bg-gray-100 py-16 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/rs1.webp" 
                alt="Woman wearing bracelet" 
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Bracelet Sizing Guide</h2>
              <h3 className="text-xl font-semibold text-gray-700 mb-6">MEASURING YOUR CORRECT BRACELET SIZE</h3>
              <ol className="space-y-3 text-gray-600 text-lg">
                <li>1. Take a thin strip of paper and wrap it around your wrist.</li>
                <li>2. Mark the spot where the paper meets the other end.</li>
                <li>3. Measure the marked distance with a ruler.</li>
                <li>4. Add one inch to the measured distance.</li>
                <li>5. Compare your measurement with the charts below to determine your bracelet size.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-8">

        {/* Women's Bracelet Size Chart */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">WOMEN'S BRACELET SIZE CHART</h3>
          <table className="w-full border-collapse mb-8">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-center font-semibold text-gray-800">Sizing</th>
                <th className="border border-gray-300 px-4 py-2 text-center font-semibold text-gray-800">Inches</th>
                <th className="border border-gray-300 px-4 py-2 text-center font-semibold text-gray-800">MM</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 text-center">Very Small</td>
                <td className="border border-gray-300 px-4 py-2 text-center">6 1/2</td>
                <td className="border border-gray-300 px-4 py-2 text-center">165</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 text-center">Small</td>
                <td className="border border-gray-300 px-4 py-2 text-center">7</td>
                <td className="border border-gray-300 px-4 py-2 text-center">178</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 text-center">Medium</td>
                <td className="border border-gray-300 px-4 py-2 text-center">7 1/2</td>
                <td className="border border-gray-300 px-4 py-2 text-center">190</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 text-center">Large</td>
                <td className="border border-gray-300 px-4 py-2 text-center">8</td>
                <td className="border border-gray-300 px-4 py-2 text-center">203</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 text-center">X-Large</td>
                <td className="border border-gray-300 px-4 py-2 text-center">8 1/2</td>
                <td className="border border-gray-300 px-4 py-2 text-center">216</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Men's Bracelet Size Chart */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">MEN'S BRACELET SIZE CHART</h3>
          <table className="w-full border-collapse mb-8">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-center font-semibold text-gray-800">Sizing</th>
                <th className="border border-gray-300 px-4 py-2 text-center font-semibold text-gray-800">Inches</th>
                <th className="border border-gray-300 px-4 py-2 text-center font-semibold text-gray-800">MM</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 text-center">Small</td>
                <td className="border border-gray-300 px-4 py-2 text-center">8</td>
                <td className="border border-gray-300 px-4 py-2 text-center">203</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 text-center">Medium</td>
                <td className="border border-gray-300 px-4 py-2 text-center">8 1/2</td>
                <td className="border border-gray-300 px-4 py-2 text-center">216</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 text-center">Large</td>
                <td className="border border-gray-300 px-4 py-2 text-center">9</td>
                <td className="border border-gray-300 px-4 py-2 text-center">229</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  )
}