import * as React from 'react'
import './header.scss'
import { withRouter } from 'react-router-dom';


class Header extends React.Component<any, any>{
            constructor(props: any){
                super(props)
                this.state = {
                    data: []
                }
            }
            public render(){
            return(
                <div className='header'>
                    <div className='header-box'>
                        <div className='header-first'>
                            <img src="https://j-image.missfresh.cn/img_20171106205437312.png?mryxw=110&mryxh=28" alt=""/>
                        </div>
                        <div className='header-second'>
                            <p>北京市昌平区</p>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAALCAYAAAByF90EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTU3QzE1OUQ4NzlCMTFFNjg0RTRFMTM4MTlFQTk0QzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTU3QzE1OUU4NzlCMTFFNjg0RTRFMTM4MTlFQTk0QzAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNTdDMTU5Qjg3OUIxMUU2ODRFNEUxMzgxOUVBOTRDMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNTdDMTU5Qzg3OUIxMUU2ODRFNEUxMzgxOUVBOTRDMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PozJRhAAAAD6SURBVHjalNK9asJQGIDhk2h/tEOH3ENGh3bqVBD8naStlyAIDm2X3kfpICKKkwUXxUU3nexgdfMWHK0/Ywd9D3yBcDBKPniynJOXJCeW67o3SqkkhvhX4SeBvc3lDX10cBkykscUYx3qYYUCvkPEcujK/qYOLZDCH57QxsWZSNYX+cSHLQtzia3xLLFoQCQjkSt84d37Rt7MJLbBi8QiRiQtkWtU8aojesE2Nv76YkUjlpJIDDVUvIieiOM45qMvMZLQPVzs5FDiqKPsj+ix+I+CPugDBriVmyw0UDIjx17NPz/yn2wl0gyKqBMn480Ej7hDKyii5yDAAGHiNCoppYPeAAAAAElFTkSuQmCC" alt=""/>
                        </div>
                        <div className='header-three'>
                            {/*<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA5RJREFUWAntl71rU1EYxvNFDbQgGW2ho1bFDm2StohDK3WStiA4+CcUB7vUwV3QRUHa3clJTB0cLLYVIUlJXKpWVBAs6GCHEGxBIWn8PZd7y23uyc3HDZ164HDOPfd9nve573nPxw2FTspJBIJFINwufHNz8+zBwcEcuGnqYK1W6xdHOBz+RbNDXY1EIpmxsbGvGm+3tCwon8+PIuQhDqZadLKGsMXx8fH3LdpbZk0FEYFYLpd7TATm6cu+RH8FZyv0t/v6+hSZ0N7eXn+1Wr3IuxnsZhlK0KdbW56YmLhDvyK7ZsVX0NbWVmJ/f/85pJMQ/UXEo1gs9iCZTJb9iIvF4ulKpXKXiC5gF0fMem9v743h4eGSH07vGgpCRIxpei0xEP5EzBx5UWxG6H5PviURlYFjQKKYvmu0vpGKuAncfU2TI4YWLe2JEZcwwuqDxCVOtw9T3xghJTAEBeq/aDR6pRMxbmeKFPn1DmGnqCm/RDdGSKsJMWHlTFAxEiYOcYnTXqluvUf6HkGFQuEcFlraJSXwEesADzaXknpKe1kjKo8gVoeWrDa6lWarqRGpaVxc4tQ7oqSN1Vg8grDSDhwixBbYiOpwkCl7aUMtHyYak6BB23DbBAgyxgL5ZOMdHx46jyC+wjqbnB3Ygwgw4HA6PkxUHkEmo26NESHjNuPm9wgi8Q7PJrdhN/rlcvmMeBwfJk6PIIx2bMMLJkCQMR2+Nt7x4aEzCVqVFUvTWv4eRIABIjNjwy0fJiqPIDYwa7mTeLM6tU2gTsbEJU5hHR8mHo+gVCr1BcM1akJXCBOokzGbKwH2je3DSOMRJCs2xUXCW2PaFnQwGpFtDNrXkAVxwu37kUZBOo0J7zI+44jKZLPZgTb8HzEVVhzioi75nfQCNtwXENTtC9oGYqaJUmcXNAF17aRdR9yA7jPck+63kuiyka0wwlpfHg7nmonxjZBeqihSQS75ULyAQ6uLjTp6i7vRM/E2Kg2nrB6gWyS50PJvENHYQMC9dDpNGmVvw/eEqh+FSaYuX8/vPLcsyAHoAmffmQ5/FHEeIQq7tN+we8s+k2Fpf3QwaonyEjbzdH/H4/H0yMjID/d7p9+2IAfYbouYKKJegdOfx4dEInF5aGjoTz2PcdnXG3XjGRHVnp6em7SfEXepVCo9NfEemyA51zWW6bxOd5d6VVHTuLscqyA5Jre+k+znETOqqLnFnPRbicB/s0mrARHWdIQAAAAASUVORK5CYII=" alt=""/>*/}
                            <span className="iconfont icon-sousuo5"></span>
                            <div className='search' onClick={this.HandleSearch}>搜索</div>
                        </div>
                    </div>
                </div>
            );
        }
    public HandleSearch = () => {
       this.props.history.push('/searchs')
    }
}

export default withRouter(Header)
