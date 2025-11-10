import React from 'react';
import { QRCodeDisplay } from './components/QRCodeDisplay';
import { BitcoinIcon } from './components/icons/BitcoinIcon';

const DEFAULT_BITCOIN_ADDRESS = 'bc1q8ucuvnhw4sv0tl37zf5rxwmfqnd0pp60hpu33t';

const App = () => {
  const qrCodeData = `bitcoin:${DEFAULT_BITCOIN_ADDRESS}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${encodeURIComponent(
    qrCodeData
  )}&qzone=1&margin=1`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 font-sans antialiased text-slate-800 dark:text-slate-200">
      <header className="flex items-center gap-3 mb-8 text-center">
        <BitcoinIcon className="w-10 h-10 text-orange-500" />
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Send Me Your Bitcoin
        </h1>
      </header>

      <main className="w-full max-w-sm">
        <QRCodeDisplay
          qrCodeUrl={qrCodeUrl}
          bitcoinAddress={DEFAULT_BITCOIN_ADDRESS}
        />
      </main>
    </div>
  );
};

export default App;
