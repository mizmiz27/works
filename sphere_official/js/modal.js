$(function(){

//���[�_���E�B���h�E���o��������N���b�N�C�x���g
$("#modal-open").on('click', function(){

	//�L�[�{�[�h����Ȃǂɂ��A�I�[�o�[���C�����d�N������̂�h�~����
	$( this ).blur() ;	//�{�^������t�H�[�J�X���O��
	if( $( "#modal-overlay" )[0] ) return false ;		//�V�������[�_���E�B���h�E���N�����Ȃ� (�h�~��1)
	//if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//���݂̃��[�_���E�B���h�E���폜���ĐV�����N������ (�h�~��2)

	//�I�[�o�[���C���o��������
	$( "body" ).append( '<div id="modal-overlay"></div>' ) ;
	$( "#modal-overlay" ).fadeIn( "slow" ) ;

	//�R���e���c���Z���^�����O����
	centeringModalSyncer() ;

	//�R���e���c���t�F�[�h�C������
	$( "#modal-content" ).fadeIn( "slow" ) ;

	//[#modal-overlay]�A�܂���[#modal-close]���N���b�N������c
	$( "#modal-overlay,#modal-close" ).unbind().on('click', function(){

		//[#modal-content]��[#modal-overlay]���t�F�[�h�A�E�g������Ɂc
		$( "#modal-content,#modal-overlay" ).fadeOut( "slow" , function(){

			//[#modal-overlay]���폜����
			$('#modal-overlay').remove() ;

		} ) ;

	} ) ;

} ) ;

//���T�C�Y���ꂽ��A�Z���^�����O������֐�[centeringModalSyncer()]�����s����
$( window ).resize( centeringModalSyncer ) ;

	//�Z���^�����O�����s����֐�
	function centeringModalSyncer() {

		//���(�E�B���h�E)�̕��A�������擾
		var w = $( window ).width() ;
		var h = $( window ).height() ;

		// �R���e���c(#modal-content)�̕��A�������擾
		// jQuery�̃o�[�W�����ɂ���ẮA����[{margin:true}]���w�肵�����A�s����N�����܂��B
//		var cw = $( "#modal-content" ).outerWidth( {margin:true} );
//		var ch = $( "#modal-content" ).outerHeight( {margin:true} );
		var cw = $( "#modal-content" ).outerWidth();
		var ch = $( "#modal-content" ).outerHeight();

		//�Z���^�����O�����s����
		$( "#modal-content" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;

	}

} ) ;
