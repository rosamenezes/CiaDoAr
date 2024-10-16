import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { Alert } from 'react-native';
import { FormData } from '../../assets/mocks/mocks';
import { format } from 'date-fns';

export const generatePDF = async (data: FormData) => {
    const formattedDate = data.data ? format(data.data, 'dd/MM/yyyy') : '';

    const htmlContent = `
    <!-- Seu conteúdo HTML aqui, você pode usar os dados do formulário para preencher dinamicamente -->
    `;

    try {
        const { uri } = await Print.printToFileAsync({
        html: htmlContent,
    });
        if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(uri);
        } else {
            Alert.alert('PDF Gerado', `PDF salvo em: ${uri}`);
        }
    } catch (error) {
        Alert.alert('Erro', 'Não foi possível gerar o PDF');
    }
};