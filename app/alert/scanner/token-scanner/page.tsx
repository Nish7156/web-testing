import TokenScannerForm from '@/MainComponents/Pages/AlertModule/TokenScannerForm'
import { HeadingWithBackButton } from '@/MainComponents/elements/HeadingWithBackButton'
import { TokenActivityIcon } from '@/components/icons/TokenActivityIcon'
import { TokenIcon } from '@/components/icons/TokenIcon'
import DarkButton from '@/components/ui/DarkButton'
import React from 'react'

function TokenScanner() {
  return (
    <div>
       <div className="container relative">
        <HeadingWithBackButton
          heading="Token Scanner"
          icon={<TokenIcon />}
        />
        <TokenScannerForm maxHeight={'h-[100vh]'} />
        <div className=" container fixed bottom-20 left-0 right-0">
          <DarkButton>Scve</DarkButton>
        </div>
      </div>
    </div>
  )
}

export default TokenScanner