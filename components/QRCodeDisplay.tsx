import React, { useState } from 'react';
import { CopyIcon } from './icons/CopyIcon';
import { CheckIcon } from './icons/CheckIcon';

interface QRCodeDisplayProps {
  qrCodeUrl: string;
  label?: string;
  bitcoinAddress: string;
}

export const QRCodeDisplay = ({
  qrCodeUrl,
  label,
  bitcoinAddress,
}: QRCodeDisplayProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(bitcoinAddress).then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2500);
      });
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8 w-full transform transition-all hover:scale-105 duration-300 ease-in-out">
      <div className="flex flex-col items-center text-center">
        <div className="p-4 bg-slate-100 dark:bg-slate-700 rounded-lg">
          {qrCodeUrl ? (
            <img
              src={qrCodeUrl}
              alt="Bitcoin address QR Code for payment"
              className="w-48 h-48 md:w-56 md:h-56 object-contain rounded-md"
              aria-label="QR Code for Bitcoin address"
            />
          ) : (
            <div className="w-48 h-48 md:w-56 md:h-56 flex items-center justify-center bg-slate-200 dark:bg-slate-600 rounded-md">
              <p className="text-slate-500 dark:text-slate-400 text-center p-4">
                Generating QR code...
              </p>
            </div>
          )}
        </div>

        {label && (
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            {label}
          </p>
        )}

        <div className="mt-4 w-full p-2 bg-slate-100 dark:bg-slate-900/50 rounded-lg flex items-center justify-between gap-3 border border-slate-200 dark:border-slate-700">
          <span className="pl-2 text-sm font-mono text-slate-500 dark:text-slate-400 truncate select-all">
            {bitcoinAddress}
          </span>
          <button
            onClick={handleCopy}
            className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-800 focus:ring-orange-500 ${
              isCopied
                ? 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400'
                : 'bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300'
            }`}
            aria-label={isCopied ? 'Address copied to clipboard' : 'Copy Bitcoin address'}
          >
            {isCopied ? (
              <>
                <CheckIcon className="w-4 h-4" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <CopyIcon className="w-4 h-4" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
