import React, {useState} from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

function PostFilters({filters, setFilters}) {
  return (
    <div>
      <form>
        <MyInput
          type='text'
          placeholder='search by keywords'
          onChange={(e) => setFilters({...filters, query: e.target.value})}
          value={filters.query} />

        <MySelect
          value={filters.sort}
          onChange={selectedSortValue => setFilters({...filters, sort: selectedSortValue})}
          options={[
            {value: 'name', name: 'by name'},
            {value: 'desc', name: 'by body'}
          ]}
          defaultValue={'name'}
         />
      </form>
    </div>
  );
}

export default PostFilters;
