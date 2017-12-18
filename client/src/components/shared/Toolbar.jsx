import React from 'react'
import { Toolbar, ToolbarRow, ToolbarTitle, ToolbarSection } from 'rmwc/Toolbar';

export default ({ leftActions=[], title, rightActions=[] }) => {
  return (
    <Toolbar>
    	<ToolbarRow>
    		<ToolbarSection alignStart>
    			{ leftActions }
    			<ToolbarTitle>{title}</ToolbarTitle>
    		</ToolbarSection>
    		<ToolbarSection alignEnd>
    			{ rightActions }
    		</ToolbarSection>
    	</ToolbarRow>
    </Toolbar>
  )
}
