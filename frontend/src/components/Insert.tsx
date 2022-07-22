import EditorJS from '@editorjs/editorjs';
import Style from '../assets/css/Common.module.scss';

function Insert() {
    const editor = new EditorJS({
        autofocus: true
    });
    editor.isReady.then(() => {
        console.log('editor is ready to work!');
    });

    return (
        <div className={Style.border}>
            <div id="editorjs"></div>
        </div>
    )
}

export default Insert;