import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import colors from '../utils/colors'
import { useSelector } from 'react-redux'
import AppStateInterface from '../interfaces/AppStateInterface'
import AlbumInterface, { AlbumTrackInterface } from '../interfaces/AlbumInterface'

const useStyles = makeStyles(theme => ({
  table: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
}))

const StyledTableCell = withStyles(theme => ({
  head: {
    color: colors.grey,
    textTransform: 'uppercase',
    textAlign: 'left',
    paddingLeft: 0
  },
  body: {
    fontSize: 14,
    color: colors.white,
    border: 'none',
    paddingLeft: 1,
    paddingRight: 1,
    textOverflow: 'ellipsis'
  },
}))(TableCell)

export default function AlbumTracksTable({ album }: { album: AlbumInterface }) {
  const styles = useStyles()

  const { currentSound, currentPlayingIndex } = useSelector(
    (appState: AppStateInterface) => appState.player
  )

  return (
    <Table className={styles.table} size="small">
      <TableHead>
        <TableRow>
          <StyledTableCell># Number</StyledTableCell>
          <StyledTableCell>Title</StyledTableCell>
          <StyledTableCell>Play</StyledTableCell>
          <StyledTableCell>Download</StyledTableCell>
          {/* <StyledTableCell>By</StyledTableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {album.tracks.map((track: AlbumTrackInterface, index: number) => {
          const color = currentSound &&
            track.hash === currentSound.hash &&
            index === currentPlayingIndex ? colors.primary
            : undefined

          return (
            <TableRow key={index} style={{
              borderBottom: album.tracks.length - 1 === index ? '' : '1px solid white',
            }}>
              <StyledTableCell style={{ width: '4%' }}>
                {track.number}
              </StyledTableCell>
              {/* <StyledTableCell style={{ width: '10%', minWidth: '60px' }}> */}
              {/* <PlayPause track={track} /> */}
              {/* <Heart /> */}
              {/* </StyledTableCell> */}
              <StyledTableCell style={{ width: '90%', color }}>{track.title}</StyledTableCell>
              <StyledTableCell style={{ width: '1.5%', color }}>{track.play_count}</StyledTableCell>
              <StyledTableCell style={{ width: '1.5%', color }}>{track.download_count}</StyledTableCell>
              {/* <StyledTableCell style={{ width: '35%', color }}>{album.artist.stage_name}</StyledTableCell> */}
              {/* <StyledTableCell style={{ width: '20%', color }}>{track.type.toUpperCase()}</StyledTableCell> */}
              {/* <StyledTableCell>
                <More />
              </StyledTableCell> */}
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}