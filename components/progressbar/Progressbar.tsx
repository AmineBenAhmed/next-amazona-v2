import './ProgressbarStyle.css'

type ProgressbarType =   {
  minProg: number;
  maxProg?: number;
  label?: string;
  barColor?: string;
  dataTip?: string;
  progressColor?: string;
}

const ProgressBar = (
  {minProg, maxProg, label, dataTip, barColor, progressColor}: ProgressbarType 
) => (
  <div className="progressbar-container space-y-2">
    <label htmlFor="progress">{label}</label>
    <div className='progressbar' style={{backgroundColor: barColor || '#F9FAFB'}}>
      <div
        className="progress-seg-1 tooltip text-center" 
        data-tip={dataTip}
        style={{
          width: `${minProg}%`, 
          backgroundColor: progressColor || 'green',
          color: '#fff'
        }}
      >
       <span>{minProg}%</span>
      </div>
    </div>
  </div>
)

export default ProgressBar