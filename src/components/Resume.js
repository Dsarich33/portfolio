import React, { Component } from 'react';
import { Box, Button, Grid } from '@material-ui/core';
import { Document, Page, pdfjs } from 'react-pdf';
import throttle from 'lodash.throttle';
import CloudDownload from '@material-ui/icons/CloudDownload';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PDFWidth: null,
            numPages: null,
            pageNumber: 1,
        };
        this.myInput = React.createRef();
        this.throttledSetPDFWidth = throttle(this.setPDFWidth, 500);
    }

    componentDidMount() {
        this.setPDFWidth();
        window.addEventListener('resize', this.throttledSetPDFWidth);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.throttledSetPDFWidth);
    }

    setPDFWidth = () => {
        const width = this.myInput.current.offsetWidth;
        this.setState({ PDFWidth: width });
    };

    render() {
        const { PDFWidth } = this.state;

        return (
            <>
                <div className='resumeContainer' ref={this.myInput}>
                    <Document file='../Daniel_Sarich_Resume_nr.pdf' onLoadSuccess={this.onDocumentLoadSuccess} onLoadError={console.error}>
                        <Page className='pdfViewer' pageNumber={1} width={PDFWidth} />
                        <Page className='pdfViewer' pageNumber={2} width={PDFWidth} />
                    </Document>
                </div>
                <br />
                <br />
                <Grid container direction='row' justify='center' alignItems='center'>
                    <Button className='resumeDownload' variant='contained' color='default' startIcon={<CloudDownload />} onClick={() => window.open('/Daniel_Sarich_Resume_nr.pdf')}>
                        Download Resume
                    </Button>
                </Grid>
            </>
        );
    }
}

export default Resume;
