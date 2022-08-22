import { HeaderContainer, HeaderContent, NewTransactionButton } from './style'
import * as Dialog from '@radix-ui/react-dialog'

import logo from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'

export function Header() {
  const { closeModal, isModalOpen } = useContext(TransactionsContext)
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <Dialog.Root open={isModalOpen} onOpenChange={closeModal}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
