import './ProgressbarStyle.css'

const ProgressBar = (
  {minProg, maxProg, label, amount}: {minProg: number, maxProg?: number, label?: string, amount?: number}
  ) => (
  <div className="progressbar-container space-y-2">
    <label htmlFor="progress">La progression du financement</label>
    <div className='progressbar'>
      <div
        className="progress-seg-1 tooltip" 
        data-tip={`Montant collecté ${amount} TND`}
        style={{width: `${minProg}%`}}
      >
        
      </div>
    </div>
  </div>
)

export default ProgressBar