import { createContext, ReactNode, useEffect, useState } from 'react'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: string
  category: string
  createdAt: string
}

interface TransactionContextType {
  transactions: Transaction[]
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransactions() {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  // Usamos o sueEffect para fazer a chamada a API
  // Passamos um array vazio como dependências para que o useEffect seja chamado apenas na primeira renderização do componente
  useEffect(() => {
    loadTransactions()
    /* fetch('http://localhost:3333/transactions')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      }) */
  })
  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
