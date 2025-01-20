
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center h-[calc(100%-170px)] mt-24">
      {children}
    </div>
  )
}
export default AuthLayout
