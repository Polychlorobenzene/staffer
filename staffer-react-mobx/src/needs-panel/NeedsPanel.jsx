import {connect} from 'mobx-connect';
import {observer} from 'mobx-react';
import NeedsTable from './needs-table/NeedsTable';
import NeedsFilter from './needs-filter/NeedsFilter';

@connect
@observer
export default class NeedsPanel extends React.Component {

    render() {
        let {store: {matchingNeeds}} = this.context;
        return (
            <div className="flex">
                <h1 className="title shrink">Needs</h1>

                <div className="flex row">
                    <div className="shrink">
                        <NeedsFilter />
                    </div>
                    <div className="scroll">
                        <NeedsTable needs={matchingNeeds}/>
                    </div>
                </div>
            </div>
        );
    }

}

NeedsPanel.defaultProps = {};
